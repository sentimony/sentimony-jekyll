/**
* layzr.js
* http://callmecavs.github.io/layzr.js/
*/
var layzr = new Layzr({
  // container: null,
  // selector: '[data-layzr]',
  // attr: 'data-layzr',
  // retinaAttr: 'data-layzr-retina',
  // bgAttr: 'data-layzr-bg',
  // hiddenAttr: 'data-layzr-hidden',
  threshold: 0,
  // callback: null
});


/**
* holder.js
* https://github.com/imsky/holder
*/



/**
* isotope with imagesloaded
* https://github.com/metafizzy/isotope
* https://github.com/desandro/imagesloaded
*/
var $container = $('.isotope-container');
var $win = $(window);
$(document).ready(function() {
  $container.imagesLoaded( function() {
    $container.isotope({
      itemSelector: '.isotope-item',
      layoutMode: 'fitRows',
      filter: '.sentimony'
    });
    $container.on('layoutComplete', function(){
        $win.trigger("scroll");
    });
    var filterFns = {
    };
    $('.isotope-filter').on( 'click', 'a', function() {
      var filterValue = $( this ).attr('data-filter');
      filterValue = filterFns[ filterValue ] || filterValue;
      $container.isotope({ filter: filterValue });
    });
    $('.isotope-filter').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'a', function() {
        $buttonGroup.find('.selected').removeClass('selected');
        $( this ).addClass('selected');
      });
    });
  });
});

/**
* lazyload.js
* https://github.com/tuupola/jquery_lazyload
*/
$(function() {
  $("img.lazy").lazyload({
    // threshold : 0,
    effect : "fadeIn",
    // placeholder : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
  });
});


