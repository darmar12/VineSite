module.exports = function () {
    $.gulp.task('images', function () {
        return $.gulp.src(['./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}', '!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}'])
        .pipe($.newer('./dist/img/'))
        .pipe($.if(!$.isDev, $.imagemin([
            $.imageminGiflossy({
                optimizationLevel: 3,
                optimize: 3,
                lossy: 2
            }),
            $.imageminPngquant({
                speed: 5,
                quality: [0.6, 0.8]
            }),
            $.imageminZopfli({
                more: true
            }),
            $.imageminMozjpeg({
                progressive: true,
                quality: 90
            }),
            $.imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { removeUnusedNS: false },
                    { removeUselessStrokeAndFill: false },
                    { cleanupIDs: false },
                    { removeComments: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyText: true },
                    { collapseGroups: true }
                ]
            })
        ])))
        .pipe($.gulp.dest('./dist/img/'))
        .pipe($.debug({
            "title": "Images"
        }))
        .on('end', $.bs.reload)
    });
};