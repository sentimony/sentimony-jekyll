var gulp = require('gulp'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css');

gulp.task('font', function () {
    var fontName = 'SvgIcons';

    return gulp.src('assets/img/svg-icons/*.svg')
        .pipe(iconfontCss({
            fontName: fontName,
            path: '_scss/vendor/svg-icons/_template.scss',
            targetPath: '../../../_scss/vendor/svg-icons/_svg-icons.scss',
            fontPath: './../fonts/SvgIcons/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            fontHeight: 1001,
            formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
            normalize: true
        }))
        .pipe(gulp.dest('assets/fonts/SvgIcons/'));
});
