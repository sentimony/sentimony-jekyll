var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('js-uglify', ['js-concat'], function () {
  return gulp.src('assets/js/bundle.js')
    .pipe(plumber(function(error) {
      gutil.log(gutil.colors.red(error.message));
      this.emit('end');
    }))
    .pipe(concat('bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'));
});
