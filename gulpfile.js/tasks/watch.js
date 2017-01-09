var gulp = require('gulp');

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch([
        '_scss/**/*'
    ], ['sass']);
    gulp.watch([
        '_layouts/*',
        '_includes/**/*',
        '_pages/*',
        '_data/*',
        '_js/**/*',
        'assets/img/**/*',
        'assets/fonts/*',
        '_config.yml',
        '_config_dev.yml'
    ], ['jekyll-rebuild']);
});
