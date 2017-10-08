<template>
  <div>
    <hero></hero>
    <swiper-release-list modificator="js-swiper-release-list--home-page"></swiper-release-list>
    <about></about>
    <swiper-artist-list modificator="js-swiper-artist-list--home-page"></swiper-artist-list>
  </div>
</template>

<script>
var Hero = require('./hero.vue');
var SwiperReleaseList = require('./swiper-release-list.vue');
var About = require('./about.vue');
var SwiperArtistList = require('./swiper-artist-list.vue');

module.exports = {
  components: {
    'hero': Hero,
    'swiper-release-list': SwiperReleaseList,
    'about': About,
    'swiper-artist-list': SwiperArtistList
  }
};
</script>
