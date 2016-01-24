/**
* fotorama
* http://fotorama.io
*/
fotoramaDefaults = {
  width: 700,
  maxwidth: '100%',
  ratio: 16/9,
  allowfullscreen: true,
  nav: 'thumbs',
  trackpad: true,
  keyboard: true,
  loop: true
}

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
$(document).ready(function() {
  $container.imagesLoaded( function() {
    $container.isotope({
      itemSelector: '.isotope-item',
      layoutMode: 'fitRows',
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

