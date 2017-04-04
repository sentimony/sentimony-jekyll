;(function () {

  document.querySelector('.release-list-swiper__container').classList.add('is-visible');

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

  if (document.querySelector('.release-list-swiper--release-page')) {

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
      var elements = document.querySelectorAll('.release-list-swiper--release-page .swiper-wrapper .swiper-slide');

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
