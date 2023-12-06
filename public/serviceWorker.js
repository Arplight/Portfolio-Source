import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";
// Precache static assets
precacheAndRoute(self.__WB_MANIFEST);

// Caching pages using Stale-While-Revalidate strategy
registerRoute(
  ({ url }) => url.origin === location.origin && url.pathname.endsWith(".html"),
  new StaleWhileRevalidate()
);

// Cache CSS, JS, and other assets with CacheFirst strategy
registerRoute(
  ({ request }) =>
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "image",
  new StaleWhileRevalidate()
);

// Fallback to offline page if no match found
registerRoute(
  ({ event }) => event.request.mode === "navigate",
  async () => {
    try {
      const cache = await caches.open("offline");
      const cachedResponse = await cache.match("offline.html");
      return cachedResponse || fetch("offline.html");
    } catch (error) {
      return caches.match("offline.html");
    }
  }
);
