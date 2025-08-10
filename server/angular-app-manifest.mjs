
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
    'index.csr.html': {size: 5413, hash: 'ff6189a63863ca81804ea30420960a2ba6c7a9eb30a6eba2157a31dc9e64afde', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: 'e680318765bcb7498196dd67b2a1fc7c606d42ed568d2ac1b141f281d37268a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21050, hash: '54ceee54766fb6086497492df099624bb136cc1e127a745c13f6d768362d2058', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 24271, hash: 'ddf45e3f30d79f7bf8db440652d3d22fb790d97f36d75bc293ed831969f5ecc8', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20930, hash: '53d9ee37bd8302559a11ce926730b99693fd8c7d095397195bb7713f7085f602', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20225, hash: '4680ab3c1e0b9ff856a4619fec4312a798da2774455cc76d8ca56c69060296d8', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-4BQRBEPV.css': {size: 304882, hash: 'bONXH8jel6c', text: () => import('./assets-chunks/styles-4BQRBEPV_css.mjs').then(m => m.default)}
  },
};
