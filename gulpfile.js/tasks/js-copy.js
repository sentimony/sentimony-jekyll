var gulp = require('gulp');

gulp.task('js-copy', function () {
  return gulp.src([
      './_js/base.js',
      './_js/modules/*'
    ])
    .pipe(gulp.dest('.tmp/'));
});

gulp.task('js-copy-sw-toolbox', function () {
  return gulp.src([
      'node_modules/sw-toolbox/sw-toolbox.js',
    ])
    .pipe(gulp.dest(''));
});

gulp.task('js-copy-lib', ['js-copy', 'js-copy-sw-toolbox'], function () {
  return gulp.src([
      'node_modules/vue/dist/vue.min.js',
      'node_modules/vue-nav-tabs/dist/vue-tabs.js',
      'node_modules/swiper/dist/js/swiper.min.js',
      // 'node_modules/goodshare.js/goodshare.min.js',
      'node_modules/lazysizes/lazysizes.min.js',
      'node_modules/jquery/dist/jquery.min.js',
    ])
    .pipe(gulp.dest('.tmp/'));
});
