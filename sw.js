const CACHE_NAME = 'control-obra-cache-v1';
const urlsToCache = [
  '/Control-Obra/',
  '/Control-Obra/index.html',
  '/Control-Obra/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
