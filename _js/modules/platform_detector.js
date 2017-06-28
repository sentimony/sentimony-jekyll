define('platform_detector', [], function () {
  'use strict';

  var platform;

  return {
    getPlatform: function () {
      if ('undefined' === typeof platform) {
        platform = (function () {
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return 'mobile';
          }

          return 'desktop';
        })();
      }

      return platform;
    }
  };
});
