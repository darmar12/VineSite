module.exports = function () {
    $.gulp.task('favicon', function () {
        return $.gulp.src('./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}')
        .pipe($.favicon({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe($.gulp.dest('./dist/img/favicon/'))
        .pipe($.debug({
            "title": "Favicons",
        }))
    });
};