const CACHE_NAME = 'dr-samik-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/animate.css',
  '/assets/css/swiper-bundle.min.css',
  '/assets/js/main.js',
  '/assets/js/wow.min.js',
  '/assets/js/swiper-bundle.min.js',
  '/assets/images/about/image.png',
  '/assets/images/favicon.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap'
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
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});