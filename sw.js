// Divine Seeds - tiny service worker (only used to show message notifications on phones). Put it next to index.html.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick',e=>{
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{
    for(const c of list){if('focus' in c){c.postMessage({open:'msg'});return c.focus()}}
    return self.clients.openWindow('./');
  }));
});
