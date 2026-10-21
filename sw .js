// Divine Seeds - small service worker: shows message notifications on phones and lets Chrome install the app.
// Put it next to index.html. The file name must be exactly sw.js (no space).
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
// Fetch handler (required by Chrome for installing). Always loads fresh from the network, nothing is cached.
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
  e.respondWith(fetch(e.request));
});
self.addEventListener('notificationclick',e=>{
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{
    for(const c of list){if('focus' in c){c.postMessage({open:'msg'});return c.focus()}}
    return self.clients.openWindow('./');
  }));
});
