const staticCacheName = 'static-cache-v0';

const staticAssets = [
    './',
    './index.html',
    './images/icons/icon-192x192.png',
    './images/icons/icon-96x96.png',
    './styles/style.css',
    './js/app.js',
    './js/index.js'
];

self.addEventListener('install', async event => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll(staticAssets);
    console.log('Service worker has been installed');
});

self.addEventListener('activate', async event => {
    console.log('Service worker has been activated');
});

self.addEventListener('fetch', event => {
    console.log(`Trying to fetch ${event.request.url}`);
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                return cachedResponse || fetch(event.request);
            })
    );
})