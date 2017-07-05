define('swiper_mob_menu', ['swiper'], function (Swiper) {
  'use strict';

  var swiperMobMenu = new Swiper('.swiper-container.js-swiper-mob-menu', {
    nextButton: '.js-swiper-mob-menu-open',
    prevButton: '.js-swiper-mob-menu-close',
    onlyExternal: true,
    slidesPerView: 'auto',
    // slideToClickedSlide: true,
    breakpoints: {
      754: {
        onlyExternal: false,
        // shortSwipes: false,
      }
    }
  })
});
