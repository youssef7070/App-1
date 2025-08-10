
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
    'index.csr.html': {size: 5413, hash: '4aec857d9b8e962045673e7b037a2993e3ffbfe4abbc97d12d138dd75a2a91a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: '600a173962f0512296ab87f0d8c9ccd106c293a09baf97b75d48519e9b7162a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20910, hash: '51a312165d5f549ab83f99603af0c587c37821c4117f01c315c0463cde40287c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21030, hash: '8274cfabd197ecbbdefc9362c0e86706f062b2a1659bdcd47222d409a1ca8062', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20205, hash: '4058a6ecf60e088e01e50e21c44c5e443c132ebbbe4b7f9c4c11af7e205a5229', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 24251, hash: 'c55abbfa0794c9cb9dcc81a185a6937b4798df71c1998176d76505c47af7b6f8', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'styles-Y7VYKVKL.css': {size: 304851, hash: 'REHL8Vr1afM', text: () => import('./assets-chunks/styles-Y7VYKVKL_css.mjs').then(m => m.default)}
  },
};
