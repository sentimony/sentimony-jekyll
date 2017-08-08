define('swiper_mob_menu', ['./swiper.min', './platform_detector'], function (Swiper, platformDetector) {
  'use strict';

  var platform = platformDetector.getPlatform();

  if (platform == 'mobile') {

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

  }
});
