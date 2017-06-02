var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('js-copy', ['sass'], function () {
  return gulp.src([
      './node_modules/requirejs/require.js',
      './_js/require.config.js'
    ])
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'));
});
