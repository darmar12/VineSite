module.exports = function () {
  $.gulp.task('serve', function () {
    $.bs.init({
      server: {
        baseDir: './dist/',
      },
      port: 4000,
      notify: false
    });

    $.gulp.watch('./src/views/**/*.pug', $.gulp.parallel("pug"));
    $.gulp.watch('./src/styles/**/*.scss', $.gulp.parallel("sass"));
    $.gulp.watch('./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}', $.gulp.parallel("favicon"));
    $.gulp.watch('./src/img/svg/*.svg', $.gulp.parallel("sprites"));
    $.gulp.watch('./src/img/**/*.{jpg,jpeg,png,gif,svg}', $.gulp.parallel("images"));
    $.gulp.watch('./src/fonts/**/*.{woff,woff2}', $.gulp.parallel("fonts"));
    $.gulp.watch('./src/scripts/**/*.js', $.gulp.parallel("logic"));
  });
};