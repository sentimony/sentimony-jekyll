var gulp = require('gulp');
var copy = require('gulp-copy');
var streamqueue = require('streamqueue');

gulp.task('copy:js', function () {
  return gulp.src([
      './_js/base.js',
      './_js/modules/*'
    ])
    .pipe(gulp.dest('.tmp/'));
});

gulp.task('js-copy-sw-toolbox', function () {
  return gulp.src([
      'node_modules/sw-toolbox/sw-toolbox.js',
    ])
    .pipe(gulp.dest(''));
});

gulp.task('js-copy-lib', ['copy:js', 'js-copy-sw-toolbox', 'copy:vue'], function () {
  return gulp.src([
      'node_modules/vue/dist/vue.min.js',
      'node_modules/vue-nav-tabs/dist/vue-tabs.js',
      'node_modules/swiper/dist/js/swiper.min.js',
      // 'node_modules/goodshare.js/goodshare.min.js',
      'node_modules/lazysizes/lazysizes.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/firebase/firebase.js'
    ])
    .pipe(gulp.dest('.tmp/'));
});
