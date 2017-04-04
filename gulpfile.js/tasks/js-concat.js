var gulp = require('gulp'),
  concat = require('gulp-concat');

gulp.task('js-concat', ['sass'], function () {
  return gulp.src([
    // 'node_modules/jquery/dist/jquery.min.js',
    'node_modules/swiper/dist/js/swiper.min.js',
    'node_modules/goodshare.js/goodshare.min.js',
    'node_modules/lazysizes/lazysizes.min.js',
    '_components/**/*.js',
    '_js/global.js'
  ])
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('assets/js/'));
});
