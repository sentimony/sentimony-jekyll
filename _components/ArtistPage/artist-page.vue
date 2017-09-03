<template>
  <div class="artist-page">
    <div class="page-artist">
      <svg-triangle></svg-triangle>
      <div class="page-artist__wrapper">

        <div class="page-artist__photo">
          <a class="page-artist__photo-link" :href="'https://content.sentimony.com/assets/img/artists/large/' + $route.params.slug + '.jpg'">
            <img class="page-artist__photo-img lazyload"
              :src="'https://content.sentimony.com/assets/img/artists/small/' + $route.params.slug + '.jpg'"
              :data-srcset="'https://content.sentimony.com/assets/img/artists/medium/' + $route.params.slug + '.jpg 1x, https://content.sentimony.com/assets/img/artists/medium-retina/' + $route.params.slug + '.jpg 2x'"
              :alt="$route.params.slug + ' Medium Thumbnail'"
            >
          </a>
        </div>

        <div class="page-artist__info">
          <h1 class="page-artist__title">{{ $route.params.slug }}</h1>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  var SvgTriangle = require('./svg-triangle.vue');

  module.exports = {
    components: {
      'svg-triangle': SvgTriangle
    }
  };
</script>

<style lang="scss?outputStyle=compressed">
  .artist-page {
    // display: none;
  }
</style>
