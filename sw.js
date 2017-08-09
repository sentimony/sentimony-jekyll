"use strict";
importScripts('sw-toolbox.js');
toolbox.precache([
    'assets/css/main.css',
    'index.html',
    'releases/index.html'
  ]);
toolbox.router.get('/assets/img/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 8});
