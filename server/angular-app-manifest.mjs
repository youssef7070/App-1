
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
    'index.csr.html': {size: 5413, hash: '1fff7b9bacd270ba3f17e97ef8072704899d1076ce7db75400fb696874705ef2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: '4a5eb884736b5d6fa9abc60746984304a8bc9d418366496271b9077a2afe959d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20814, hash: '61bf13725a056e0f94bda3779dd1b259960c0245d238d8433bbdbf4c96442a0d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 24174, hash: '86fc386de4af1cebc0d92cf6961deb5d07cff0ba00e879fd51304e284db6fc37', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20128, hash: '01284c7d1a62666df25b494148b677d759eb79116c8857e707babc45237f1803', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 20953, hash: 'a7ca297e671016122c4b6403074a922041a49005bec77827f727b4d55bed7898', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-Y7VYKVKL.css': {size: 304851, hash: 'REHL8Vr1afM', text: () => import('./assets-chunks/styles-Y7VYKVKL_css.mjs').then(m => m.default)}
  },
};
