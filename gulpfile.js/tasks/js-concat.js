var gulp = require('gulp'),
  concat = require('gulp-concat');

gulp.task('js-concat', ['sass'], function () {
  return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/swiper/dist/js/swiper.jquery.min.js',
    'node_modules/goodshare.js/goodshare.min.js',
    'node_modules/layzr.js/dist/layzr.min.js',
    '_components/**/*.js',
    '_js/global.js'
  ])
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('assets/js/'));
});
