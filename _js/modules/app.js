define('app', ['./vue.min'], function(Vue) {

  var VueRouter = require('vue-router/dist/vue-router.js');
  Vue.use(VueRouter);

  var axios = require('axios');
  var VueAxios = require('vue-axios');
  Vue.use(VueAxios, axios);

  // Initialize Firebase
  var firebase = require('firebase');
  var config = {
    apiKey: "AIzaSyCTVGdSsE6h8PA6WOeqxgzyCgX4L3eOoNE",
    authDomain: "sentimony-db.firebaseapp.com",
    databaseURL: "https://sentimony-db.firebaseio.com",
    projectId: "sentimony-db",
    storageBucket: "sentimony-db.appspot.com",
    messagingSenderId: "724792675849"
  };
  firebase.initializeApp(config);

  var BaseBg = require('../vue/base-bg.vue');
  var Headr = require('../vue/headr.vue');
  var Logolink = require('../vue/logolink.vue');
  var Hero = require('../vue/hero.vue');
  var About = require('../vue/about.vue');
  var Donate = require('../vue/donate.vue');
  var Footr = require('../vue/footr.vue');
  var MenuMain = require('../vue/menu-main.vue');
  var MenuSocial = require('../vue/menu-social.vue');
  var MenuMobile = require('../vue/menu-mobile.vue');
  var Friends = require('../vue/friends.vue');
  var News = require('../vue/news.vue');
  var Contacts = require('../vue/contacts.vue');
  var SwiperReleaseList = require('../vue/swiper-release-list.vue');
  var SwiperArtistList = require('../vue/swiper-artist-list.vue');

  var Index1 = require('../vue/index1.vue');
  var News1 = require('../vue/news1.vue');

  var router = new VueRouter({
    mode: 'history',
    routes: [{
      path: '/',
      component: Index1
    },{
      path: '/news1/',
      component: News1
    }]
  });

  new Vue({
    el: '#app',
    router: router,
    components: {
      'base-bg': BaseBg,
      'headr': Headr,
      'logolink': Logolink,
      'hero': Hero,
      'about': About,
      'donate': Donate,
      'footr': Footr,
      'menu-main': MenuMain,
      'menu-social': MenuSocial,
      'menu-mobile': MenuMobile,
      'friends': Friends,
      'news': News,
      'contacts': Contacts,
      'swiper-release-list': SwiperReleaseList,
      'swiper-artist-list': SwiperArtistList
    }
  });

});
