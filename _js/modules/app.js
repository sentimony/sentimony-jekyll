define('app', ['./vue.min'], function(Vue) {

  var MenuSocial = require('./menu-social.vue');

  new Vue({
    el: '#app',
    components: {
      'menu-social': MenuSocial
    }
  });
});
