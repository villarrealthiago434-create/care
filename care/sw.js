const CACHE_NAME = 'care-app-v1';

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activación y limpieza de cachés viejos
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Estrategia Network-First: siempre busca datos frescos en Render/Supabase
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});