define('app', ['./vue.min'], function(Vue) {

  var VueRouter = require('vue-router/dist/vue-router.js');
  Vue.use(VueRouter);

  var MenuSocial = require('./menu-social.vue');

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
      'menu-social': MenuSocial
    }
  });
});
