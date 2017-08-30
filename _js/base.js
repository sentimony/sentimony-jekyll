var connectModule = [
  'app',
  'jquery.min',
  'lazysizes.min',
  'swiper.min',
  'vue-tabs',
  'vue.min',
  // 'goodshare.min',
  'firebase',

  'platform_add_class',
  'platform_detector',
  'swiper_menu_mobile',
  'swiper_release_list_init',
  'vue_tabs_init'
];

connectModule.forEach(function (elem) {
  require("./" + elem + ".js");
});
