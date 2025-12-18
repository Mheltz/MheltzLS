self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("era-tracker").then(cache => {
      return cache.addAll([
        "/life_switchers.html",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

