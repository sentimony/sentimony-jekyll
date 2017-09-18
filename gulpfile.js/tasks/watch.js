var gulp = require('gulp');

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch([
    '_scss/**/*.scss',
    '_components/**/*.scss'
  ], ['scss']);
  gulp.watch([
    '_components/**/*.js',
    '_components/**/*.vue',
    '_js/**/*',
    'webpack.config.js'
  ], ['jekyll-rebuild']);
  gulp.watch([
    '_layouts/**/*.html',
    '_components/**/*.html',
    '_components/**/*.json',
    '_components/**/*.svg',
    '_pages/**/*',
    '_posts/**/*',
    'assets/img/**/*',
    // 'assets/css/*',
    // 'assets/js/*',
    'manifest.json',
    '_config.yml'
  ], ['jekyll-rebuild']);
});
