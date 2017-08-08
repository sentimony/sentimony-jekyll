define('swiper_release_list', ['./swiper.min'], function (Swiper) {
  'use strict';

  ;(function () {

    if (document.querySelector('.js-release-list-swiper--home-page')) {

      document.querySelector('.release-list-swiper__container').classList.add('is-visible');

      var swiperHomePage = new Swiper ('.js-release-list-swiper--home-page .swiper-container', {
        nextButton: '.release-list-swiper__next',
        prevButton: '.release-list-swiper__prev',
        scrollbar: '.swiper-scrollbar',
        mousewheelControl: true,
        mousewheelForceToAxis: true,
        freeMode: true,
        slidesPerView: 'auto'
      })

    }

    if (document.querySelector('.js-release-list-swiper--release-page')) {

      document.querySelector('.release-list-swiper__container').classList.add('is-visible');

      var swiperReleasePage = new Swiper ('.js-release-list-swiper--release-page .swiper-container', {
        nextButton: '.release-list-swiper__next',
        prevButton: '.release-list-swiper__prev',
        scrollbar: '.swiper-scrollbar',
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
        var elements = document.querySelectorAll('.js-release-list-swiper--release-page .swiper-wrapper .swiper-slide');

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

