var gulp = require('gulp');

gulp.task('copy:data', function () {
  return gulp.src([
      '_components/MenuSocial/*.json'
    ])
    .pipe(gulp.dest('assets/data/'));
});
