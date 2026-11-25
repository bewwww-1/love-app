self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("push",e=>{const d=e.data?e.data.json():{};
 e.waitUntil((async()=>{const cs=await self.clients.matchAll({type:"window",includeUncontrolled:true});
  if(cs.some(c=>c.visibilityState==="visible"))return;
  await self.registration.showNotification(d.title||"สายเรียกเข้า",{body:d.body||"แตะเพื่อรับสาย",tag:"call-"+d.from,renotify:true,requireInteraction:true,vibrate:[300,150,300,150,300],icon:"icon-192.png",badge:"icon-192.png",data:{from:d.from}})})())});
self.addEventListener("notificationclick",e=>{e.notification.close();const from=e.notification.data&&e.notification.data.from;
 e.waitUntil((async()=>{const cs=await self.clients.matchAll({type:"window",includeUncontrolled:true});
  if(cs.length){const c=cs[0];await c.focus();c.postMessage({from});return}
  await self.clients.openWindow("./?from="+encodeURIComponent(from||""))})())});
