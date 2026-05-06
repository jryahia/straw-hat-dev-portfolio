// Q Fix: Service Worker for PWA offline support
const CACHE_NAME = 'straw-hat-portfolio-v1';
const ALLOWED_ORIGINS = [self.location.origin];
const urlsToCache = [
  '/',
  'index.html',
  'css/style.css',
  'css/projects.css',
  'css/mobile.css',
  'js/script.js',
  'js/projects.js',
  'js/audio.js',
  'js/contact.js',
  'jolly-roger.svg',
  'audio/one-piece-overtaken.mp3'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  
  // Validate origin to prevent SSRF
  if (!ALLOWED_ORIGINS.includes(requestUrl.origin) && !requestUrl.protocol.startsWith('http')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).catch(() => {
          // Return offline page for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('index.html');
          }
          // Return generic error response for other requests
          return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
