var gulp = require('gulp');
var browserSync = require('browser-sync');
var cp = require('child_process');

gulp.task('jekyll-build', ['js-uglify', 'sass'], function (done) {
  browserSync.notify('gulp jekyll-build');
  var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";
  return cp.spawn(jekyll, ['build', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'})
    .on('close', done);
});
