;$(document).ready(function () {

  if ($('.swiper-container').length) {
    var swiper = new Swiper ('.swiper-container', {
      // loop: true,
      // grabCursor: true,
      // paginationType: 'progress',
      // preloadImages: true,
      // lazyLoading: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      // pagination: '.swiper-pagination',
      // paginationClickable: true,
      centeredSlides: true,
      // spaceBetween: 30,
      scrollbar: '.swiper-scrollbar',
      slideToClickedSlide: true,
      mousewheelControl: true,
      mousewheelForceToAxis: true,
      freeMode: true,
      slidesPerView: 'auto',
      // slidesPerView: 7,
      // breakpoints: {
      //   1024: {
      //     slidesPerView: 5
      //   },
      //   768: {
      //     slidesPerView: 4,
      //   },
      //   640: {
      //     slidesPerView: 2
      //   },
      //   320: {
      //     slidesPerView: 1
      //   }
      // }
    })

    swiper.slideTo(getSlideIndexByClass('is-selected'), false);

    function getSlideIndexByClass(className) {
      var index = 0;
      $.each($('.swiper-wrapper').children(), function(i, item) {
        if ($(item).hasClass(className)) {
          index = i;
          return false;
        }
      });
      return index;
    }
  }
});
