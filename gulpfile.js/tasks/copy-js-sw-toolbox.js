var gulp = require('gulp');

gulp.task('copy:js:sw-toolbox', function () {
  return gulp.src([
    'node_modules/sw-toolbox/sw-toolbox.js',
  ])
    .pipe(gulp.dest(''));
});
