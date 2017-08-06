requirejs.onResourceLoad = function (context, map) {
  console.log('Loaded module: ' + map.name);
};

requirejs.config({
  baseUrl: '/assets/js/modules',
  urlArgs: '01',
  paths: {
    'vue': '../lib/vue.min',
    'vue-tabs': '../lib/vue-tabs',
    'swiper': '../lib/swiper.min',
    'lazysizes': '../lib/lazysizes.min',
    'jquery': '../lib/jquery.min',
    // 'goodshare': '../lib/goodshare.min',
    'swiper_mob_menu': 'swiper_mob_menu',
    'swiper_release_list': 'swiper_release_list',
    'vue_tabs': 'vue_tabs',
    'platform_add_class': 'platform_add_class',
    'platform_detector': 'platform_detector',
  },
  deps: [
    'vue',
    'vue-tabs',
    'swiper',
    'lazysizes',
    'jquery',
    // 'goodshare',
    'swiper_mob_menu',
    'swiper_release_list',
    'vue_tabs',
    'platform_add_class',
    'platform_detector',
  ],
});
