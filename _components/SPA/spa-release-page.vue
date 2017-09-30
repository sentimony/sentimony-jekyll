<template>
  <div>
    <swiper-release-list modificator="js-swiper-release-list--release-page"></swiper-release-list>
    <release-page></release-page>
  </div>
</template>

<script>
var SwiperReleaseList = require('./swiper-release-list.vue');
var ReleasePage = require('./release-page.vue');

module.exports = {
  components: {
    'swiper-release-list': SwiperReleaseList,
    'release-page': ReleasePage
  }
};
</script>
