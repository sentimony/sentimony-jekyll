var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', ['jekyll-build'], function () {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});
