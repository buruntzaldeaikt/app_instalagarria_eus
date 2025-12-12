self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('buruntzaldea-store').then((cache) => cache.addAll([
            './index.html',
            './manifest.json',
            './icons/logo.svg',
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});
