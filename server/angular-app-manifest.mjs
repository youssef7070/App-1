
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
    'index.csr.html': {size: 5413, hash: '8346991c8359c44fefc6f1bc9ba2cd4ec342f6ec407112385b85894619374e86', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: '415f98650b08172ece6387c6a64b6f6fd3723507c30f1bcacbb0e496aba9e3eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 23975, hash: '35cf730b2fdd7ec1b32419e97f5e8019b41aa5a4b12973ba191f55429edc6ff3', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20634, hash: '2a302ed87e71bb1d6e874462762b36401f55208c60027fed8090a27773a4f099', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 20754, hash: '212dee8a7c6ba5a2180f9af5de2c7200769fac45c2ac9337fbcca34ac5eb8267', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19929, hash: '351e627687290afe2598244451a0ddc2d4eb0ccdc0990f434b1ed3ab77fcb75f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-Y7VYKVKL.css': {size: 304851, hash: 'REHL8Vr1afM', text: () => import('./assets-chunks/styles-Y7VYKVKL_css.mjs').then(m => m.default)}
  },
};
