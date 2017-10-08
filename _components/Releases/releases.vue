<template>
  <div class="releases">
    <h1 class="releases__title">{{ ourReleases }}</h1>
    <div class="releases__list">
      <div v-for="i in sortByDate" class="releases__item swiper-release-list-item">
        <router-link v-if="i.slug" :to="'/release/' + i.slug + '/'" class="releases__link swiper-release-list-item__link">
          <div class="swiper-release-list-item__cover">
            <img v-if="i.cover"
              class="swiper-release-list-item__img"
              :src="'https://content.sentimony.com/assets/img/releases/small/' + i.cat_no + '/' + i.slug + '.jpg'"
              :srcset="'https://content.sentimony.com/assets/img/releases/small/' + i.cat_no + '/' + i.slug + '.jpg 1x, https://content.sentimony.com/assets/img/releases/small-retina/' + i.cat_no + '/' + i.slug + '.jpg 2x'"
              :alt="i.title + ' Small Thumbnail'"
            >
            <div v-else class="swiper-release-list-item__coming">Artwork<br>in progress</div>
          </div>
          <div v-if="i.coming_soon" class="swiper-release-list-item__status swiper-release-list-item__status--coming-soon">Coming Soon</div>
          <div v-if="i.new" class="swiper-release-list-item__status swiper-release-list-item__status--new">New</div>
          <div class="swiper-release-list-item__title">{{ i.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
var sortBy = require('lodash/sortBy');

module.exports = {
  data: function () {
    return {
      ourReleases: 'Releases',
      releases: {
        data: [
          {
            title: '',
            date: '',
            slug: '',
            cat_no: ''
          }
        ]
      }
    }
  },
  created: function () {
    var self = this;
    this.axios.get('https://sentimony-db.firebaseio.com/releases.json').then(function (response) {
      self.releases = response.data;
      console.log('firebase: RELEASES catched');
    }).catch(function (error) {
      console.log(error);
    });
  },
  computed: {
    sortByDate () {
      return sortBy(this.releases, 'date').reverse()
    }
  }
};
</script>

<style lang="scss?outputStyle=compressed">
@import '../../_scss/ui/_variables.scss';

.releases {
  max-width: 1278px;
  margin: 0 auto;

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  &__item,
  &__link {
    width: 120px;
  }
}
</style>
