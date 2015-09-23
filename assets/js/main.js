/**
 * Created by Sallar Kaboli <sallar.kaboli@gmail.com>
 * @sallar
 * 
 * Released under the MIT License.
 * http://sallar.mit-license.org/
 * 
 * This document demonstrates three things:
 * 
 * - Creating a simple parallax effect on the content
 * - Creating a Medium.com-style blur on scroll image
 * - Getting scroll position using requestAnimationFrame for better performance
 */


/**
 * Cache
 */
var $content = $('header .content')
    , $blur    = $('header .overlay')
    , wHeight  = $(window).height();

$(window).on('resize', function(){
    wHeight = $(window).height();
});

/**
 * requestAnimationFrame Shim 
 */
window.requestAnimFrame = (function()
{
    return  window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    function( callback ){
                        window.setTimeout(callback, 1000 / 60);
                    };
})();

/**
 * Scroller
 */
function Scroller()
{
    this.latestKnownScrollY = 0;
    this.ticking            = false;
}

Scroller.prototype = {
    /**
     * Initialize
     */
    init: function() {
        window.addEventListener('scroll', this.onScroll.bind(this), false);
    },

    /**
     * Capture Scroll
     */
    onScroll: function() {
        this.latestKnownScrollY = window.scrollY;
        this.requestTick();
    },

    /**
     * Request a Tick
     */
    requestTick: function() {
        if( !this.ticking ) {
            window.requestAnimFrame(this.update.bind(this));
        }
        this.ticking = true;
    },

    /**
     * Update.
     */
    update: function() {
        var currentScrollY = this.latestKnownScrollY;
        this.ticking       = false;
        
        /**
         * Do The Dirty Work Here
         */
        var slowScroll = currentScrollY / 4
            , blurScroll = currentScrollY * 2;
        
        $content.css({
            'transform'         : 'translateY(-' + slowScroll + 'px)',
            '-moz-transform'    : 'translateY(-' + slowScroll + 'px)',
            '-webkit-transform' : 'translateY(-' + slowScroll + 'px)'
        });
        
        $blur.css({
            'opacity' : blurScroll / wHeight
        });
    }
};

/**
 * Attach!
 */
var scroller = new Scroller();  
scroller.init();




// Isotope
var $container = $('.isotope-container');
$(document).ready(function() {
    $container.imagesLoaded( function() {
        $container.isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows',
        });
    });
});


// Slick
$(document).ready(function(){
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      dots: false,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: false,
      focusOnSelect: true
    });
});



$(document).ready(function() {
    $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,
      
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });
});

var groups = {};
$('.galleryItem').each(function() {
  var id = parseInt($(this).attr('data-group'), 10);
  
  if(!groups[id]) {
    groups[id] = [];
  } 
  
  groups[id].push( this );
});


$.each(groups, function() {
  
  $(this).magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      gallery: { enabled:true }
  })
  
});

// fotorama
// http://fotorama.io
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

