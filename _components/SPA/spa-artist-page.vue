<template>
  <div>
    <!-- <swiper-artist-list modificator="js-swiper-artist-list--artist-page"></swiper-artist-list> -->
    <!-- <artist-page></artist-page> -->
  </div>
</template>

<script>
  var SwiperArtistList = require('./swiper-artist-list.vue');
  var ArtistPage = require('./artist-page.vue');

  module.exports = {
    components: {
      'swiper-artist-list': SwiperArtistList,
      'artist-page': ArtistPage
    }
  };
</script>
