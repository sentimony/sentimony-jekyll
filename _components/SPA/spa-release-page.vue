<template>
  <div>
    <menu-temporary></menu-temporary>
    <!-- <swiper-release-list modificator="js-swiper-release-list--release-page"></swiper-release-list> -->
    <!-- <release-page></release-page> -->
  </div>
</template>

<script>
  var MenuTemporary = require('./menu-temporary.vue');
  var SwiperReleaseList = require('./swiper-release-list.vue');
  var ReleasePage = require('./release-page.vue');

  module.exports = {
    components: {
      'menu-temporary': MenuTemporary,
      'swiper-release-list': SwiperReleaseList,
      'release-page': ReleasePage
    }
  };
</script>
