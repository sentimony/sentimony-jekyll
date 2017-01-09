var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', ['jekyll-build'], function () {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});
