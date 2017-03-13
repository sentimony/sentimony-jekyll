var gulp = require('gulp');

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch([
    '_scss/**/*',
    '_components/**/*.scss'
  ], ['sass']);
  gulp.watch([
    '_layouts/**/*.html',
    '_components/**/*.html',
    '_components/**/*.js',
    '_components/**/*.json',
    '_js/**/*',
    '_pages/**/*',
    'assets/img/**/*',
    '_config.yml',
    '_config_dev.yml'
  ], ['jekyll-rebuild']);
});
