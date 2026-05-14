const CACHE_NAME = 'precursorado-v1';
const urlsToCache = [
  './',
  './index.html',
  './planes.png',
  './manifest.json',
  './s-205b_s.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});