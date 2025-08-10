
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
    'index.csr.html': {size: 5413, hash: '38ed268c0f087db285f31379fee80359854cde7e266399f18630cf392952e2fe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: '9ea1c5ffb78c7fe6318b0d7c20c002a7b794416e073a3519b8aea91af141cd69', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 20753, hash: '5d7ce721ff35c845922d32362ffe88b82a8dca60229c11cc4c177a526933a8f3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20633, hash: '5cedb5e01f1dfecb9b683b9fafff20eb8c5b08da920478e2ee42430ecb722a12', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 23974, hash: 'cd035c0ee5929ab0d5d096cf6745c0d717e193b1f8660bd67881bc7c4d15487f', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19928, hash: '69efe1d45534756747f3660a1a6106fbd52b466e31645a874e80d252ea15b499', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-Y7VYKVKL.css': {size: 304851, hash: 'REHL8Vr1afM', text: () => import('./assets-chunks/styles-Y7VYKVKL_css.mjs').then(m => m.default)}
  },
};
