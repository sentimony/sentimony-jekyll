define('vue_tabs_init_init', ['./vue.min', './vue-tabs'], function (Vue, VueTabs) {
  'use strict';

    Vue.use(VueTabs);
    new Vue({
      el: "#vue-tabs",
    })

});
