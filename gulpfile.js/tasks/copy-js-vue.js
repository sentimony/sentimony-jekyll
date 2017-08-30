var gulp = require('gulp');
var copy = require('gulp-copy');
var streamqueue = require('streamqueue');

gulp.task('copy:js:vue', function () {
  return streamqueue({ objectMode: true },
    gulp.src('_components/**/*.vue')
  )
    .pipe(copy('.tmp/vue/', {prefix: 100}));
});
