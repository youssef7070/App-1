
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
    'index.csr.html': {size: 5413, hash: '74cfe4e65257ec868dd3734c6a527bce61ea5422d09db075eb6c2db005652716', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: '57d5f99327dc97bc6a92831d76fba23cbb2e68b96bebe0f14557a6e231c78876', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 20802, hash: 'fd10224630a739b4d26b558c85d7510d2d73327a1654e5bec1be3fd044c2c633', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20683, hash: '3194c5a55632b1878d03cb0f5cb8d64463c97142058c7c39ad7cc80fb0a0fe6e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 23993, hash: '417e5bc48fa4a2504d5bc2520903b8225d8051f0120a6a5657967b20351df245', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19947, hash: '5dd571b32f0a2ca48d42862d893fa1b2abd480199a55adc74650b8eb4e489947', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-Y7VYKVKL.css': {size: 304851, hash: 'REHL8Vr1afM', text: () => import('./assets-chunks/styles-Y7VYKVKL_css.mjs').then(m => m.default)}
  },
};
