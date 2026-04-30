const CACHE_NAME = 'cyber-field-manual-v7';
const ASSETS = [
  'index.html', 'home.html',
  'threat-actors.html', 'aanvalstechnieken.html', 'social-engineering.html', 'insider-threat.html',
  'kill-chains.html', 'diamond.html', 'attack.html',
  'ioc.html', 'admiralty.html', 'tlp.html', 'sharing.html',
  'nis2.html', 'avg.html', 'dora.html',
  'basismaatregelen.html', 'backup.html', 'mfa-identity.html', 'cloud-security.html',
  'ir-proces.html', 'risk-management.html', 'tprm.html',
  'intel-cycle.html', 'intel-types.html', 'analysis-methods.html', 'maturity.html',
'acronyms.html', 'glossary.html', 'bronnen.html', 'handleiding.html', 'changelog.html',
  'styles.css', 'menu.js', 'icons.js', 'theme.js', 'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS).catch(()=>{})));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isHtml = event.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/';
  const isData = url.pathname.endsWith('.js') || url.pathname.endsWith('.css');
  if (isHtml || isData) {
    event.respondWith(
      fetch(event.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, copy)).catch(()=>{});
        return resp;
      }).catch(() => caches.match(event.request))
    );
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
