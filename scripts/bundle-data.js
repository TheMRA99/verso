#!/usr/bin/env node
// Syncs the data embedded in index.html from cards.json.
// Usage: node scripts/bundle-data.js [--check]
var fs = require('fs');
var path = require('path');

var root = path.join(__dirname, '..');
var htmlPath = path.join(root, 'index.html');
var checkOnly = process.argv.indexOf('--check') !== -1;

function fail(msg) { console.error('bundle-data: ' + msg); process.exit(2); }

var data;
try { data = JSON.parse(fs.readFileSync(path.join(root, 'cards.json'), 'utf8')); }
catch (e) { fail('cannot read cards.json: ' + e.message); }
if (!data || typeof data.signupBonuses !== 'object' || data.signupBonuses === null || Array.isArray(data.signupBonuses)) fail('cards.json: signupBonuses must be an object');
if (!Array.isArray(data.cards) || !data.cards.length) fail('cards.json: cards must be a non-empty array');
if (typeof data.dataVersion !== 'number' || data.dataVersion % 1 !== 0) fail('cards.json: dataVersion must be an integer');
if (typeof data.updated !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(data.updated)) fail('cards.json: updated must be YYYY-MM-DD');

var html = fs.readFileSync(htmlPath, 'utf8');
var original = html;

// Index just past the bracket that closes the literal starting at `start`.
// Skips string contents (', ", `) and backslash escapes.
function matchEnd(s, start) {
  var open = s[start], close = open === '{' ? '}' : ']';
  var depth = 0, i = start, quote = null;
  for (; i < s.length; i++) {
    var ch = s[i];
    if (quote) {
      if (ch === '\\') i++;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') quote = ch;
    else if (ch === '{' || ch === '[') depth++;
    else if (ch === '}' || ch === ']') {
      depth--;
      if (depth === 0) return ch === close ? i + 1 : -1;
    }
  }
  return -1;
}

function replaceLiteral(name, opener, value) {
  var m = new RegExp('var ' + name + '\\s*=\\s*').exec(html);
  if (!m) fail('marker not found: var ' + name + '=');
  var start = m.index + m[0].length;
  if (html[start] !== opener) fail(name + ' is not followed by ' + opener);
  var end = matchEnd(html, start);
  if (end < 0) fail('unbalanced literal for ' + name);
  var json = JSON.stringify(value);
  try { JSON.parse(json); } catch (e) { fail('invalid JSON for ' + name); }
  html = html.slice(0, start) + json + html.slice(end);
}

replaceLiteral('SIGNUP_BONUSES', '{', data.signupBonuses);
replaceLiteral('CARDS_DB', '[', data.cards);

var verRe = /(var BUNDLED_DATA_VERSION=)\d+(;)/;
if (!verRe.test(html)) fail('marker not found: var BUNDLED_DATA_VERSION=<n>;');
html = html.replace(verRe, function (_, a, b) { return a + data.dataVersion + b; });

var dateRe = /(cardsDataUpdated=V\.ref\(')\d{4}-\d{2}-\d{2}('\))/;
if (!dateRe.test(html)) fail("marker not found: cardsDataUpdated=V.ref('YYYY-MM-DD')");
html = html.replace(dateRe, function (_, a, b) { return a + data.updated + b; });

var changed = html !== original;
var summary = data.cards.length + ' cards, ' + Object.keys(data.signupBonuses).length + ' signup bonuses, dataVersion ' + data.dataVersion + ', updated ' + data.updated;
if (checkOnly) {
  console.log('bundle-data --check: ' + (changed ? 'OUT OF SYNC' : 'in sync') + ' (' + summary + ')');
  process.exit(changed ? 1 : 0);
}
if (changed) fs.writeFileSync(htmlPath, html);
console.log('bundle-data: ' + (changed ? 'updated index.html' : 'index.html already in sync') + ' (' + summary + ')');
