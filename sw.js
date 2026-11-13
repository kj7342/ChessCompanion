const CACHE="chess-companion-v10";
self.addEventListener("install",event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(["./","./index.html","./manifest.webmanifest"]);await self.skipWaiting()})()));
self.addEventListener("activate",event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})()));
self.addEventListener("fetch",event=>{
 const req=event.request;
 if(req.mode==="navigate"||new URL(req.url).pathname.endsWith("/index.html")){
  event.respondWith(fetch(req,{cache:"no-store"}).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put("./index.html",copy))}return response}).catch(()=>caches.match("./index.html")));
 }else{
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req)));
 }
});