<template>
  <div class="releases">
    <h1 class="releases__title swiper-release-list__title">{{ ourReleases }}</h1>
    <div class="releases__list">
      <div v-for="i in releases.data" class="releases__item swiper-release-list-item">
        <!-- <a v-if="i.slug" :href="'/release/' + i.slug" class="releases__link swiper-release-list-item__link"> -->
        <router-link v-if="i.slug" :to="'/release/' + i.slug" class="releases__link swiper-release-list-item__link">
          <div class="releases__photo swiper-release-list-item__cover">
            <img v-if="i.cover"
              class="swiper-release-list-item__img lazyload"
              :src="'https://content.sentimony.com/assets/img/releases/small/' + i.cat_no + '/' + i.slug + '.jpg'"
              :data-srcset="'https://content.sentimony.com/assets/img/releases/small/' + i.cat_no + '/' + i.slug + '.jpg 1x, https://content.sentimony.com/assets/img/releases/small-retina/' + i.cat_no + '/' + i.slug + '.jpg 2x'"
              :alt="i.title + ' Small Thumbnail'"
            >
            <div v-else class="swiper-release-list-item__coming">Artwork<br>in progress</div>
          </div>
          <div v-if="i.coming_soon" class="swiper-release-list-item__status swiper-release-list-item__status--coming-soon">Coming Soon</div>
          <div v-if="i.new" class="swiper-release-list-item__status swiper-release-list-item__status--new">New</div>
          <div class="swiper-release-list-item__title">{{ i.title }}</div>
        </router-link>
        <!-- </a> -->
      </div>
    </div>
  </div>
</template>

<script>
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
      this.axios.get('/assets/data/releases.json').then(function (response) {
        self.releases = response.data.releases;
      }).catch(function (error) {
        console.log(error);
      });
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

    // &__photo {
    //   display: block;
    //   margin: 0 auto;
    //   width: 100%;
    //   height: auto;
    //   box-shadow: $shadow;
    //   border-radius: 8px;
    // }

    // &__title {
    //   min-height: 44px;
    // }
  }
</style>
