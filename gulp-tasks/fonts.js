module.exports = function () {
    $.gulp.task('fonts', function () {
        return $.gulp.src('./src/fonts/**/*.{woff,woff2}')
        .pipe($.gulp.dest('./dist/fonts/'))
        .pipe($.debug({
            "title": "Fonts"
        }));
    });
};