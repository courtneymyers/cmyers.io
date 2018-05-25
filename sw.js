self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cmyers.io').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/meta/favicon.ico',
        '/meta/apple-touch-icon.png',
        '/meta/mask-icon.svg',
        '/meta/manifest.json',
        '/meta/browserconfig.xml',
        '/meta/mstile-150.png',
        '/meta/site-icon-192.png',
        '/meta/site-icon-512.png',
        '/css/styles.css',
        '/img/icons.svg',
      ]);
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
