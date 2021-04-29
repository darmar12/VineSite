module.exports = function () {
    $.gulp.task('default', $.gulp.series(
            $.gulp.parallel(['favicon', 'fonts', 'images', 'pug', 'sass', 'sprites', 'logic']),
            $.gulp.parallel('serve'),
        ),
    );
};