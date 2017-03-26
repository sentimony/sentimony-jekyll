;$(document).ready(function () {

  $('.release-list-swiper__container').addClass('is-visible');

  var swiper = new Swiper ('.release-list-swiper__container--home-page', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    // centeredSlides: true,
    scrollbar: '.swiper-scrollbar',
    slideToClickedSlide: true,
    mousewheelControl: true,
    mousewheelForceToAxis: true,
    freeMode: true,
    slidesPerView: 'auto'
  })

  if ($('.release-list-swiper__container--release-page').length) {

    var swiper = new Swiper ('.release-list-swiper__container--release-page', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      centeredSlides: true,
      scrollbar: '.swiper-scrollbar',
      slideToClickedSlide: true,
      mousewheelControl: true,
      mousewheelForceToAxis: true,
      freeMode: true,
      slidesPerView: 'auto'
    })

    swiper.slideTo(getSlideIndexByClass('is-selected'), false);

    function getSlideIndexByClass(className) {
      var index = 0;
      $.each($('.release-list-swiper__container--release-page .swiper-wrapper').children(), function(i, item) {
        if ($(item).hasClass(className)) {
          index = i;
          return false;
        }
      });
      return index;
    }
  }
});
