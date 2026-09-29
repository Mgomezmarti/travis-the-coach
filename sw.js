// Service worker: red primero (para ver siempre tus últimos cambios),
// caché como respaldo cuando no hay cobertura en el gimnasio.
const CACHE = "travis-v1";
const FILES = [
  "./", "index.html", "styles.css", "app.js", "data/rutinas.js",
  "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-180.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
