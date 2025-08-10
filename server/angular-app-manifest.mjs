
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
    'index.csr.html': {size: 5413, hash: '76f9c2b22b08a915cf4842ad94290832a989bad2d5a55d8fcd62e2dbfe7fcc4c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: 'bdc199f09574d2783fd72562f92b21773abe1d865c79f681a113cd654c7dacca', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 24221, hash: 'bcef52764c8a0dcd17df184a853817d04ce263d1d1b1b9f29a726df53d125a32', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20861, hash: '08026803b001e9113b2d0bceb0c223068ce11999667f66af20cadd194cc43d14', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21000, hash: '030f4b67144e4eab3aeaa40de56ed2562c30f10b712dcf9ce38f5b152f17b937', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20175, hash: 'eb980afae21fd4f05bec26d5a7beafa27ded6e57ff6f4bf6a3df02c04dc7a244', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-Y7VYKVKL.css': {size: 304851, hash: 'REHL8Vr1afM', text: () => import('./assets-chunks/styles-Y7VYKVKL_css.mjs').then(m => m.default)}
  },
};
