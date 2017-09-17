var connectModule = [
  'app',
  'vue.min',
  'vue-tabs',
  'swiper.min',
  'lazysizes.min',
  // 'goodshare.min',
  // 'firebase',
  // 'firebase_init',
  // 'vuex',
  // 'store',

  // 'swiper_release_list_init',
  // 'swiper_artist_list_init',
  'vue_tabs_init'
];

// require.ensure([] , function() {
  connectModule.forEach(function (elem) {
    require("./" + elem + ".js");
  });
// });
