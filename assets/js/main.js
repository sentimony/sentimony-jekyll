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
  threshold: -50,
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
* http://www.appelsiini.net/projects/lazyload
*/
var $lazyImg = $("img.lazy");
$(function() {
    $lazyImg.lazyload({
      threshold : 0,
      effect : "fadeIn",
      // event: "scrollstop",
      failure_limit: Math.max($lazyImg.length - 1, 0)
    });
});


