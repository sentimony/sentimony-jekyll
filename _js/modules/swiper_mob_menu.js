define('swiper_mob_menu', ['swiper', 'platform_add_class'], function (Swiper, platform_add_class) {
  'use strict';

  var swiperMobMenu = new Swiper('.mobile .js-swiper-mob-menu', {
    nextButton: '.js-swiper-mob-menu-open',
    prevButton: '.js-swiper-mob-menu-close',
    // slideToClickedSlide: true
  })

});
