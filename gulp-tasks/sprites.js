module.exports = function () {
    $.gulp.task('sprites', function () {
        return $.gulp.src('./src/img/svg/*.svg')
            .pipe($.sprite({
                shape: {
                    dest: "intermediate-svg"
                },
                mode: {
                    stack: {
                        sprite: "../sprite.svg"
                    }
                }
            }))
            .pipe($.gulp.dest('./dist/img/sprites/'))
            .pipe($.debug({
                "title": "Sprites"
            }))
            .on('end', $.bs.reload)
    });
};