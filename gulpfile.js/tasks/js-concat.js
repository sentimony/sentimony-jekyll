var gulp = require('gulp'),
  concat = require('gulp-concat');

gulp.task('js-concat', ['sass'], function () {
  return gulp.src([
    '_js/lib/*',
    '_js/vendor/*',
    '_js/main.js',
    'node_modules/swiper/dist/js/swiper.js',
    '_components/**/*.js'
  ])
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('assets/js/'));
});
