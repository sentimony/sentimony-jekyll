var gulp = require('gulp');

gulp.task('copy:js:modules', function () {
  return gulp.src([
    '_js/base.js',
    '_js/modules/*'
  ])
    .pipe(gulp.dest('.tmp/js/'));
});
