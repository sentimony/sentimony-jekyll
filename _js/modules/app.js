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

  var MenuSocial = require('./menu-social.vue');
  var Logolink = require('./logolink.vue');
  var Hero = require('./hero.vue');

  var Index1 = require('./index1.vue');
  var News1 = require('./news1.vue');

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
      'logolink': Logolink,
      'hero': Hero,
      'menu-social': MenuSocial
    }
  });
});
