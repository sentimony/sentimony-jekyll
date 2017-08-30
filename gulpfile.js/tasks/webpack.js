'use strict';

var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');

gulp.task('webpack', ['copy:js:libs', 'copy:js:modules', 'copy:js:vue', 'copy:js:sw-toolbox', 'copy:data'], function (callback) {
  webpack(require('../../webpack.config.js'), function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString(true));
    callback();
  });
});
