requirejs.onResourceLoad = function (context, map) {
  console.log('Loaded module: ' + map.name);
};

// requirejs.onError = function (err) {
//   console.log(err);
// };

requirejs.config({
  baseUrl: '/assets/js/modules',
  urlArgs: '01',
  paths: {
    'vue': '../lib/vue.min',
    'vue-tabs': '../lib/vue-tabs',
    'swiper': '../lib/swiper.min',
    'lazysizes': '../lib/lazysizes.min',
    'jquery': '../lib/jquery.min',
    'goodshare': '../lib/goodshare.min',
    // 'common': '../common',
    // 'app_bundle': '../bundle.min',
    'swiper_mob_menu': 'swiper_mob_menu',
    'swiper_release_list': 'swiper_release_list',
    'vue_tabs': 'vue_tabs',
    'platform_add_class': 'platform_add_class',
    'platform_detector': 'platform_detector',
  },
  // bundles: {
  //   'app_bundle': [
  //     'swiper_mob_menu',
  //     'swiper_release_list',
  //     'vue_tabs',
  //     'platform_add_class',
  //     'platform_detector',
  //   ]
  // },
  deps: [
    'vue',
    'vue-tabs',
    'swiper',
    'lazysizes',
    'jquery',
    'goodshare',
    // 'common',
    // 'app_bundle',
    'swiper_mob_menu',
    'swiper_release_list',
    'vue_tabs',
    'platform_add_class',
    'platform_detector',
  ],
});
