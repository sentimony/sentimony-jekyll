define('platform_add_class', ['jquery', 'platform_detector'], function ($, platformDetector) {
  'use strict';

  var $body = $('body');

  if(!$body.hasClass('mobile') || !$body.hasClass('desktop')){
    var platform = platformDetector.getPlatform();

    $body.addClass(platform);
  }
});
