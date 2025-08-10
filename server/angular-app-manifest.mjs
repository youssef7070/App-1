
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5413, hash: '5293fec5692a1f327d449c3346a51c811fdd6e56b9a9175dfe10973a6291883a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: '60a1b17d17bb6c65e5627f13fe2f86e63b1ffbc41f53ac6bd8509ca48184da6b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21029, hash: 'f28bd5a17558b5bec0e882fc99c5678afdf3e0fa66ab955273c508600e90d376', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 24250, hash: 'f0c02790ac079e702864882009d59a214ceebb5e2e7b67de267da5825aee7851', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20909, hash: '2fc3aea7ec4a83cffc83302bcd0bc71a67a2adbf27e316b9e3cc3a253c214476', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20204, hash: '889b5ce5f2911cd7c3282a2e52de2f4974f7840927ebb98afc76c8c6dbbdd572', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-Y7VYKVKL.css': {size: 304851, hash: 'REHL8Vr1afM', text: () => import('./assets-chunks/styles-Y7VYKVKL_css.mjs').then(m => m.default)}
  },
};
