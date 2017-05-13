var gulp = require('gulp'),
  concat = require('gulp-concat');

gulp.task('js-concat', ['sass'], function () {
  return gulp.src([
    'node_modules/vue/dist/vue.min.js',
    'node_modules/vue-nav-tabs/dist/vue-tabs.js',
    'node_modules/swiper/dist/js/swiper.min.js',
    'node_modules/goodshare.js/goodshare.min.js',
    'node_modules/lazysizes/lazysizes.min.js',
    '_components/**/*.js',
    '_js/**/*.js'
  ])
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('assets/js/'));
});
