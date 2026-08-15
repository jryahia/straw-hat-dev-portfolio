// Q Fix: Service Worker for PWA offline support
const CACHE_NAME = 'straw-hat-portfolio-v2';
const ALLOWED_ORIGINS = [self.location.origin];
const urlsToCache = [
  '/',
  'index.html',
  'css/style.css',
  'css/projects.css',
  'css/mobile.css',
  'css/chatbot.css',
  'js/script.js',
  'js/projects.js',
  'js/audio.js',
  'js/contact.js',
  'js/i18n.js',
  'js/chatbot.js',
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

// Fetch event - stale-while-revalidate: serve cache, refresh it from network,
// and fall back to network when not cached (avoids pinning old assets forever).
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Validate origin to prevent SSRF
  if (!ALLOWED_ORIGINS.includes(requestUrl.origin) && !requestUrl.protocol.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request).then((response) => {
        // Only cache valid, same-origin GET responses (avoid caching errors)
        if (response && response.status === 200 && response.type === 'basic' && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallbacks
        if (event.request.mode === 'navigate') return caches.match('index.html');
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      });
      // Return the network first if we have no cached copy; otherwise cached + background refresh
      return cached || networkFetch;
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
