module.exports = function () {
    $.gulp.task("pug", () => {
        return $.gulp.src('./src/**/**/*.pug')
        .pipe($.pug({
            pretty: true
        }))
        .pipe($.gulp.dest('./dist/'))
        .pipe($.bs.stream());
    });
};