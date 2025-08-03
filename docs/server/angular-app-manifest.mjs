
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/App-1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/App-1/home",
    "route": "/App-1"
  },
  {
    "renderMode": 2,
    "route": "/App-1/about"
  },
  {
    "renderMode": 2,
    "route": "/App-1/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/App-1/contact"
  },
  {
    "renderMode": 2,
    "route": "/App-1/home"
  },
  {
    "renderMode": 2,
    "redirectTo": "/App-1",
    "route": "/App-1/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5417, hash: 'a5d2f29761232f25263d61ad36d7ecc5de1c3c9004493c50109a90be163fba8e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1059, hash: 'dc0a02b57be4f41862a76ceb850c0d5f839db1df7a7dfb511b4daad1ddeeeb5f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20151, hash: '727598dfb23df669bba08586de2af1418ef273afe08b800f591441922fab136a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 24197, hash: '60c8509982eaffab3daee33cff1831de7535763012c5df1b47014c01324e1d33', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20868, hash: '00f6086ea7bb2b917140349db42b4a2389253369f6f38294339e67496d0138c9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 20976, hash: '23d8b634b291dbb44897d92f049dd2947e73f8355d82af4aa67bce0fd7be2967', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-Y7VYKVKL.css': {size: 304851, hash: 'REHL8Vr1afM', text: () => import('./assets-chunks/styles-Y7VYKVKL_css.mjs').then(m => m.default)}
  },
};
