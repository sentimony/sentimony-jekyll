define('swiper_mob_menu', ['swiper'], function (Swiper) {
  'use strict';

    var swiperMobMenu = new Swiper('.swiper-container.js-swiper-mob-menu', {
      nextButton: '.js-swiper-mob-menu-open',
      prevButton: '.js-swiper-mob-menu-close',
      onlyExternal: true,
      // slideToClickedSlide: true,
      breakpoints: {
        754: {
          onlyExternal: false,
          // shortSwipes: false,
        }
      }
    })

    // var menuButtonOpen = document.getElementsByClassName('js-swiper-mob-menu-open'),
    // var menuButtonClose = document.getElementsByClassName('js-swiper-mob-menu-open'),
    // var swiperMobMenu = new Swiper('.js-swiper-mob-menu .swiper-container', {
    //   nextButton: '.js-swiper-mob-menu-open',
    //   prevButton: '.js-swiper-mob-menu-close',
    //   onlyExternal: true,
    //   breakpoints: {
    //     754: {
    //       onlyExternal: false,
    //       shortSwipes: false,
    //       slideToClickedSlide: true,
    //     }
    //   },
    //   onSlideChangeStart: function(slider) {
    //     if (slider.activeIndex == 0) {
    //       menuButtonOpen.classList.add('is-visible')
    //     } else
    //       menuButtonClose.classList.add('is-hidden')
    //   },
    //   onSlideChangeEnd: function(slider) {
    //     if (slider.activeIndex == 1)
    //       menuButtonOpen.classList.add('is-hidden')
    //     else
    //       menuButtonClose.classList.add('is-visible')
    //   },
    // })

});
