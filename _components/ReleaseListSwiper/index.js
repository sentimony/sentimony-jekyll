;$(document).ready(function () {

  $('.release-list-swiper__container').addClass('is-visible');

  var homePageSwiper = new Swiper ('.release-list-swiper--home-page .swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    scrollbar: '.swiper-scrollbar',
    // centeredSlides: true,
    // slideToClickedSlide: true,
    mousewheelControl: true,
    mousewheelForceToAxis: true,
    freeMode: true,
    slidesPerView: 'auto'
  })

  if ($('.release-list-swiper--release-page').length) {

    var releasePageSwiper = new Swiper ('.release-list-swiper--release-page .swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      scrollbar: '.swiper-scrollbar',
      centeredSlides: true,
      slideToClickedSlide: true,
      mousewheelControl: true,
      mousewheelForceToAxis: true,
      freeMode: true,
      slidesPerView: 'auto'
    })

    releasePageSwiper.slideTo(getSlideIndexByClass('is-selected'), false);

    function getSlideIndexByClass(className) {
      var index = 0;
      $.each($('.release-list-swiper--release-page .swiper-wrapper').children(), function(i, item) {
        if ($(item).hasClass(className)) {
          index = i;
          return false;
        }
      });
      return index;
    }
  }
});
