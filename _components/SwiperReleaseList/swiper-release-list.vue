<template>
  <div class="swiper-release-list" :class="modificator">
    <div class="swiper-release-list__title">{{ ourReleases }}</div>
    <div class="swiper-container swiper-release-list__container">
      <div class="swiper-wrapper">
        <div v-for="i in releases.data" class="swiper-slide swiper-release-list-item is-selected">
          <!-- <a class="swiper-release-list-item__link" :href="'/release/' + i.slug"> -->
          <router-link class="swiper-release-list-item__link" :to="'/release/' + i.slug">
            <div class="swiper-release-list-item__wrapper">
              <div class="swiper-release-list-item__cover">
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
            </div>
            <div class="swiper-release-list-item__title">{{ i.title }}</div>
          </router-link>
          <!-- </a> -->
        </div>
      </div>
      <div class="swiper-release-list__prev js-swiper-release-list__prev"></div>
      <div class="swiper-release-list__next js-swiper-release-list__next"></div>
      <div class="swiper-scrollbar swiper-release-list__scrollbar js-swiper-release-list__scrollbar"></div>
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
    watch: {
      releases: function () {
        setTimeout(function () {
          initSwiper();
        }, 0);
      }
    },
    props: ['modificator'],
    created: function () {
      var self = this;
      this.axios.get('/assets/data/releases.json').then(function (response) {
        self.releases = response.data.releases;
      }).catch(function (error) {
        console.log(error);
      });
    }
  };

  function initSwiper() {
    var Swiper = require('../js/swiper.min');

    if (document.querySelector('.js-swiper-release-list--home-page')) {

      document.querySelector('.swiper-release-list__container').classList.add('is-visible');

      var swiperHomePage = new Swiper ('.js-swiper-release-list--home-page .swiper-container', {
        nextButton: '.js-swiper-release-list__next',
        prevButton: '.js-swiper-release-list__prev',
        scrollbar: '.js-swiper-release-list__scrollbar',
        mousewheelControl: true,
        mousewheelForceToAxis: true,
        freeMode: true,
        slidesPerView: 'auto'
      });

    }

    if (document.querySelector('.js-swiper-release-list--release-page')) {

      document.querySelector('.swiper-release-list__container').classList.add('is-visible');

      var swiperReleasePage = new Swiper ('.js-swiper-release-list--release-page .swiper-container', {
        nextButton: '.js-swiper-release-list__next',
        prevButton: '.js-swiper-release-list__prev',
        scrollbar: '.js-swiper-release-list__scrollbar',
        centeredSlides: true,
        slideToClickedSlide: true,
        mousewheelControl: true,
        mousewheelForceToAxis: true,
        freeMode: true,
        slidesPerView: 'auto'
      })

      // swiperReleasePage.slideTo(getSlideIndexByClass('is-selected'), false);

      // function getSlideIndexByClass(className) {
      //   var index = 0;
      //   var elements = document.querySelectorAll('.js-swiper-release-list--release-page .swiper-wrapper .swiper-slide');

      //   elements.forEach(function(item,i,arr){
      //     if (item.classList.contains(className)) {
      //       index = i;
      //       return false;
      //     }
      //   })

      //   return index;
      // }
    }

  };
</script>

<style lang="scss?outputStyle=compressed">
  .swiper-release-list {
  }
</style>
