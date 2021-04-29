// module.exports = function () {
//     const webpackConfig = require("../webpack.config");
//     $.gulp.task("script", () => {
//         return $.gulp.src("./scr/scripts/index.js")
//             .pipe($.stream(webpackConfig), $.webpack)
//             .pipe($.if(!$.isDev, $.rename({
//                 suffix: ".min"
//             })))
//             .pipe($.gulp.dest('./dist/scripts/'))
//             .pipe($.debug({
//                 "title": "Scripts"
//             }))
//             .pipe($.bs.stream());
//     });
// };

module.exports = function () {
    const webpackConfig = require("../webpack.config");
    $.gulp.task("logic", () => {
        return $.gulp.src("./scr/scripts/**/*.js")
        .pipe($.stream(webpackConfig), $.webpack)
        .pipe($.if(!$.isDev, $.rename({
            suffix: ".min"
        })))
        .pipe($.gulp.dest('./dist/scripts/'))
        .pipe($.debug({
            "title": "Scripts"
        }))
        .pipe($.bs.stream());
    });
};