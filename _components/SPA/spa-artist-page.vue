<template>
  <div>
    <menu-temporary></menu-temporary>
    <!-- <swiper-artist-list modificator="js-swiper-artist-list--artist-page"></swiper-artist-list> -->
    <!-- <artist-page></artist-page> -->
  </div>
</template>

<script>
  var MenuTemporary = require('./menu-temporary.vue');
  var SwiperArtistList = require('./swiper-artist-list.vue');
  var ArtistPage = require('./artist-page.vue');

  module.exports = {
    components: {
      'menu-temporary': MenuTemporary,
      'swiper-artist-list': SwiperArtistList,
      'artist-page': ArtistPage
    }
  };
</script>
