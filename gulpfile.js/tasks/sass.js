var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
  return gulp.src([
      '_scss/main.scss'
    ])
    .pipe(plumber(function (error) {
      gutil.log(gutil.colors.red(error.message));
      this.emit('end');
    }))
    .pipe(sass({
      outputStyle: 'compressed',
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 2 version', '> 0%', 'ie > 7', 'safari 5', 'ios 6', 'android 4'], {cascade: true}))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest('assets/css'));
});
