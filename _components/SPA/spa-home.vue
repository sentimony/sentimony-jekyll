<template>
  <div>
    <temporary-menu></temporary-menu>
    <hero></hero>
    <swiper-release-list></swiper-release-list>
    <about></about>
    <swiper-artist-list></swiper-artist-list>
  </div>
</template>

<script>
  var TemporaryMenu = require('./temporary-menu.vue');
  var Hero = require('./hero.vue');
  var SwiperReleaseList = require('./swiper-release-list.vue');
  var About = require('./about.vue');
  var SwiperArtistList = require('./swiper-artist-list.vue');

  module.exports = {
    components: {
      'temporary-menu': TemporaryMenu,
      'hero': Hero,
      'swiper-release-list': SwiperReleaseList,
      'about': About,
      'swiper-artist-list': SwiperArtistList
    }
  };
</script>
