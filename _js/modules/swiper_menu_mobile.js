define('swiper_menu_mobile', ['./swiper.min', './platform_detector'], function (Swiper, platformDetector) {
  'use strict';

  var platform = platformDetector.getPlatform();

  if (platform === 'mobile') {

    var swiperMobMenu = new Swiper('.swiper-container.js-swiper-menu-mobile', {
      // initialSlide: 0,
      // resistanceRatio: .00000000000001,
      nextButton: '.js-swiper-menu-mobile-open',
      prevButton: '.js-swiper-menu-mobile-close',
      // onlyExternal: true,
      slidesPerView: 'auto',
      slideToClickedSlide: true
    })

  }
});
