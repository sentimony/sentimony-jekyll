<template>
  <div class="swiper-artist-list" :class="modificator">
    <div class="swiper-artist-list__title">{{ ourArtists }}</div>
    <div class="swiper-container swiper-artist-list__container">
      <div class="swiper-wrapper">
        <div v-for="i in artists.data" class="swiper-slide swiper-artist-list-item is-selected">
          <!-- <a class="swiper-artist-list-item__link" :href="'/artist/' + i.slug"> -->
          <router-link class="swiper-artist-list-item__link" :to="'/artist/' + i.slug">
            <div class="swiper-artist-list-item__wrapper">
              <div class="swiper-artist-list-item__cover">
                <img v-if="i.slug" class="swiper-artist-list-item__img lazyload"
                  :src="'https://content.sentimony.com/assets/img/artists/small/' + i.slug + '.jpg'"
                  :data-srcset="'https://content.sentimony.com/assets/img/artists/small/' + i.slug + '.jpg 1x, https://content.sentimony.com/assets/img/artists/small-retina/' + i.slug + '.jpg 2x'"
                  :alt="i.title + ' Small Thumbnail'"
                >
              </div>
            </div>
            <div class="swiper-artist-list-item__title">{{ i.title }}</div>
          </router-link>
          <!-- </a> -->
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
    watch: {
      artists: function () {
        setTimeout(function () {
          initSwiper();
        }, 0);
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

  function initSwiper() {
    var Swiper = require('../js/swiper.min');

    if (document.querySelector('.js-swiper-artist-list--home-page')) {

      document.querySelector('.swiper-artist-list__container').classList.add('is-visible');

      var swiperHomePage = new Swiper ('.js-swiper-artist-list--home-page .swiper-container', {
        nextButton: '.js-swiper-artist-list__next',
        prevButton: '.js-swiper-artist-list__prev',
        scrollbar: '.js-swiper-artist-list__scrollbar',
        mousewheelControl: true,
        mousewheelForceToAxis: true,
        freeMode: true,
        slidesPerView: 'auto'
      })

    }

    if (document.querySelector('.js-swiper-artist-list--artist-page')) {

      document.querySelector('.swiper-artist-list__container').classList.add('is-visible');

      var swiperartistPage = new Swiper ('.js-swiper-artist-list--artist-page .swiper-container', {
        nextButton: '.js-swiper-artist-list__next',
        prevButton: '.js-swiper-artist-list__prev',
        scrollbar: '.js-swiper-artist-list__scrollbar',
        centeredSlides: true,
        slideToClickedSlide: true,
        mousewheelControl: true,
        mousewheelForceToAxis: true,
        freeMode: true,
        slidesPerView: 'auto'
      })

    //   swiperartistPage.slideTo(getSlideIndexByClass('is-selected'), false);

    //   function getSlideIndexByClass(className) {
    //     var index = 0;
    //     var elements = document.querySelectorAll('.js-swiper-artist-list--artist-page .swiper-wrapper .swiper-slide');

    //     elements.forEach(function(item,i,arr){
    //       if (item.classList.contains(className)) {
    //         index = i;
    //         return false;
    //       }
    //     })

    //     return index;
    //   }
    }

  };
</script>

<style lang="scss?outputStyle=compressed">
  .swiper-artist-list {
  }
</style>
