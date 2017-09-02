define('swiper_artist_list_init', ['./swiper.min'], function (Swiper) {
  'use strict';

  ;(function () {

    if (document.querySelector('.js-swiper-artist-list--home-page')) {

      document.querySelector('.swiper-artist-list__container').classList.add('is-visible');

      var swiperHomePage = new Swiper ('.js-swiper-artist-list--home-page .swiper-container', {
        nextButton: '.js-swiper-artist-list__next',
        prevButton: '.js-swiper-artist-list__prev',
        scrollbar: '.js-swiper-artist-list__scrollbar',
        mousewheelControl: true,
        mousewheelForceToAxis: true,
        freeMode: true,
        slidesPerView: 'auto',
        // loop: true,
        // loopedSlides: 'loop'
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
        slidesPerView: 'auto',
        // loop: true,
        // loopedSlides: 'loop'
      })

      swiperartistPage.slideTo(getSlideIndexByClass('is-selected'), false);

      function getSlideIndexByClass(className) {
        var index = 0;
        var elements = document.querySelectorAll('.js-swiper-artist-list--artist-page .swiper-wrapper .swiper-slide');

        elements.forEach(function(item,i,arr){
          if (item.classList.contains(className)) {
            index = i;
            return false;
          }
        })

        return index;
      }
    }

  })();

});

