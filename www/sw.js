var CACHE='verso-v7';
var URLS=['./', './index.html'];
self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(URLS); }));
  self.skipWaiting();
});
self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request).then(function(resp) {
      if (resp.status === 200) {
        var rc = resp.clone();
        caches.open(CACHE).then(function(c) { c.put(e.request, rc); });
      }
      return resp;
    }).catch(function() {
      return caches.match(e.request).then(function(r) { return r || caches.match('./'); });
    })
  );
});
