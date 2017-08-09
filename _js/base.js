// var vue = require('../node_modules/vue/dist/vue.min.js');

var connectModule = [
  'goodshare.min',
  'jquery.min',
  'lazysizes.min',
  'swiper.min',
  'vue-tabs',
  'vue.min',
  'platform_add_class',
  'platform_detector',
  'swiper_mob_menu',
  'swiper_release_list',
  'vue_tabs'
];

connectModule.forEach(function (elem) {
  require("./" + elem + ".js");
});
