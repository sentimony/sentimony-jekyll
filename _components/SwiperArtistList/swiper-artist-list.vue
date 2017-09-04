<template>
  <div class="swiper-artist-list" :class="modificator">
    <div class="swiper-artist-list__title">{{ ourArtists }}</div>
    <div class="swiper-container swiper-artist-list__container">
      <div class="swiper-wrapper">
        <div v-for="i in artists.data" class="swiper-slide swiper-artist-list-item">
            <a class="swiper-artist-list-item__link" :href="'/artist/' + i.slug">
              <div class="swiper-artist-list-item__wrapper">
                <div class="swiper-artist-list-item__cover">
                  <img class="swiper-artist-list-item__img lazyload"
                    :src="'https://content.sentimony.com/assets/img/artists/small/' + i.slug + '.jpg'"
                    :data-srcset="'https://content.sentimony.com/assets/img/artists/small/' + i.slug + '.jpg 1x, https://content.sentimony.com/assets/img/artists/small-retina/' + i.slug + '.jpg 2x'"
                    :alt="i.title + ' Small Thumbnail'"
                  >
                </div>
              </div>
              <div class="swiper-artist-list-item__title">{{ i.title }}</div>
            </a>
        </div>
      </div>
      <div class="swiper-artist-list__prev js-swiper-artist-list__prev"></div>
      <div class="swiper-artist-list__next js-swiper-artist-list__next"></div>
      <div class="swiper-scrollbar swiper-artist-list__scrollbar js-swiper-artist-list__scrollbar"></div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        ourArtists: 'Artists',
        artists: {
          data: [
            {
              slug: '',
              title: ''
            }
          ]
        }
      }
    },
    props: ['modificator'],
    created: function () {
      var self = this;
      this.axios.get('/assets/data/artists.json').then(function (response) {
        self.artists = response.data.artists;
      }).catch(function (error) {
        console.log(error);
      });
    }
  };
</script>

<style lang="scss?outputStyle=compressed">
  .swiper-artist-list {
  }
</style>
