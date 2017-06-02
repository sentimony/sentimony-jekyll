var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./tasks', { recurse: true });

gulp.task('default', ['jekyll-build']);
