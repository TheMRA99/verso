var CACHE = 'verso-v16';
var URLS = ['./', './index.html', './assets/tailwind.css', './fonts/fonts.css', './fonts/inter-latin.woff2', './fonts/sora-latin.woff2', './vendor/vue.global.prod.js', './cards.json', './manifest.webmanifest', './privacy.html', './terms.html', './favicon.png', './apple-touch-icon.png', './icons/icon-192.png', './icons/icon-512.png', './makers-mark.png'];

self.addEventListener('install', function(e) {
  // Resilient precache: a single failing URL must never block install.
  e.waitUntil(caches.open(CACHE).then(function(c) {
    return Promise.all(URLS.map(function(u) {
      return c.add(u).catch(function() { /* skip and keep going */ });
    }));
  }));
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
  }).then(function() { return self.clients.claim(); }));
});

// Cache only good same-origin responses.
function put(req, resp) {
  if (resp && resp.status === 200 && resp.type === 'basic') {
    var rc = resp.clone();
    caches.open(CACHE).then(function(c) { c.put(req, rc); });
  }
  return resp;
}

// Network first; optional timeout (ms) before falling back to cache/fallback.
function networkFirst(req, fallbackKey, timeout) {
  return new Promise(function(resolve) {
    var done = false;
    function fallback() {
      caches.match(req).then(function(r) {
        return r || (fallbackKey ? caches.match(fallbackKey) : null);
      }).then(function(r) { resolve(r || Response.error()); });
    }
    var timer = timeout ? setTimeout(function() { if (!done) { done = true; fallback(); } }, timeout) : null;
    fetch(req).then(function(resp) {
      if (done) { put(req, resp); return; } // late arrival: still refresh cache
      done = true;
      if (timer) clearTimeout(timer);
      if (resp.status === 200) { resolve(put(req, resp)); } else { resolve(resp); }
    }).catch(function() {
      if (done) return;
      done = true;
      if (timer) clearTimeout(timer);
      fallback();
    });
  });
}

self.addEventListener('fetch', function(e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // let the browser handle cross-origin

  // Page navigations: network first (3s), then cached shell.
  if (req.mode === 'navigate') {
    e.respondWith(networkFirst(req, './index.html', 3000));
    return;
  }
  // Card data: always try fresh, fall back to cache.
  if (url.pathname.slice(-10) === 'cards.json') {
    e.respondWith(networkFirst(req, null, 0));
    return;
  }
  // Everything else: cache first, refresh in the background.
  e.respondWith(caches.match(req).then(function(cached) {
    var net = fetch(req).then(function(resp) { return put(req, resp); }).catch(function() { return null; });
    if (cached) { e.waitUntil(net); return cached; }
    return net.then(function(r) { return r || Response.error(); });
  }));
});
