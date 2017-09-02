define('swiper_release_list_init', ['./swiper.min'], function (Swiper) {
  'use strict';

  ;(function () {

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
      })

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

      swiperReleasePage.slideTo(getSlideIndexByClass('is-selected'), false);

      function getSlideIndexByClass(className) {
        var index = 0;
        var elements = document.querySelectorAll('.js-swiper-release-list--release-page .swiper-wrapper .swiper-slide');

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

