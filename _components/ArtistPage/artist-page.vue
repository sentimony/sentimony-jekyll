<template>
  <div class="artist-page">
    <div class="page-artist">
      <svg-triangle></svg-triangle>
      <div class="page-artist__wrapper">

        <div class="page-artist__photo">
          <a v-if="artist.slug" class="page-artist__photo-link" :href="'https://content.sentimony.com/assets/img/artists/large/' + artist.slug + '.jpg'">
            <img v-if="artist.slug" class="page-artist__photo-img lazyload"
              :src="'https://content.sentimony.com/assets/img/artists/small/' + artist.slug + '.jpg'"
              :srcset="'https://content.sentimony.com/assets/img/artists/medium/' + artist.slug + '.jpg 1x, https://content.sentimony.com/assets/img/artists/medium-retina/' + artist.slug + '.jpg 2x'"
              :alt="artist.title + ' Medium Thumbnail'"
            >
          </a>
        </div>

        <div class="page-artist__info">
          <h1 class="page-artist__title">{{ artist.title }}</h1>
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
    },
    data: function () {
      return {
        artist: {
          data: [
            {
              slug: '',
              title: ''
            }
          ]
        }
      }
    },
    created: function () {
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData: function () {
        var self = this;
        var id = this.$route.params.slug;
        this.axios.get('https://sentimony-db.firebaseio.com/artists/data/' + id + '/.json').then(function (response) {
          self.artist = response.data;
          console.log('firebase >>> artist ' + id + ' catched');
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style lang="scss?outputStyle=compressed">
  .artist-page {
  }
</style>
