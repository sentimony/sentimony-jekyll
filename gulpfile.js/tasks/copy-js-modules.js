var gulp = require('gulp');
var copy = require('gulp-copy');
var streamqueue = require('streamqueue');

gulp.task('copy:js:modules', function () {
  return streamqueue({ objectMode: true },
    gulp.src([
      '_js/base.js',
      '_js/modules/*',
      '_components/**/*.js'
    ])
  )
    .pipe(copy('.tmp/js/', {prefix: 100}));
});
