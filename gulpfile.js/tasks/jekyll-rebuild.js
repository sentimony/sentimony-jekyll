var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});
