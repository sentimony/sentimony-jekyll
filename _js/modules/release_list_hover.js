define('release_list_hover', [], function () {
  'use strict';

  function hasClass(el, className) {
    if (el.classList)
      return el.classList.contains(className)
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  }

  function addClass(el, className) {
    if (el.classList)
      el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
  }

  function removeClass(el, className) {
    if (el.classList)
      el.classList.remove(className)
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className=el.className.replace(reg, ' ')
    }
  }

  var item = document.querySelector('.release-list-swiper-item');
  var link1 = document.querySelector('.release-list-swiper-item__link');
  var link2 = document.querySelector('.js-release-list-swiper-item-link');

  link2.onmouseenter = function() {
    addClass(item, 'is-hovered')
  }

  link2.onmouseleave = function() {
    removeClass(item, 'is-hovered')
  }
});
