
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
    'index.csr.html': {size: 5419, hash: 'ee733c7ff856ca32c6a10e134ca642122b8f6ace726fb016712db91dcbb23faf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1061, hash: 'e2caf74e851c551ade490c02fe43179c0cb9341f108a8453d4674caf43293ac1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 20977, hash: '0f224f2de3769bea4a94ad5552b48a245673f704b304d995935bad7c7d38a254', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20152, hash: 'c0ab108ea06c31ad567cfc39db796b6103375775970c71f2ceb79c0578a95558', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20869, hash: 'c6efe26c7e0109bb969c4fd21a730abde4b539938b37171163fbec775ddd3c1a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 24198, hash: '6dc53fce1a306fec5a695552928fa04bba0129c5f05e19b05065a3498aaa5994', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'styles-Y7VYKVKL.css': {size: 304851, hash: 'REHL8Vr1afM', text: () => import('./assets-chunks/styles-Y7VYKVKL_css.mjs').then(m => m.default)}
  },
};
