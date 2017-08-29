// var vue = require('../node_modules/vue/dist/vue.min.js');

var connectModule = [
  'app',

  // 'goodshare.min',
  'jquery.min',
  'lazysizes.min',
  'swiper.min',
  'vue-tabs',
  'vue.min',
  'firebase',

  'platform_add_class',
  'platform_detector',
  'swiper_menu_mobile',
  'swiper_release_list',
  'vue_tabs'
];

connectModule.forEach(function (elem) {
  require("./" + elem + ".js");
});
