module.exports = function () {
    $.gulp.task("sass", () => {
        return $.gulp.src('./src/styles/**/*.scss')
        .pipe($.if($.isDev, $.sourcemaps.init()))
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.groupMedia())
        .pipe($.if(!$.isDev, $.autoprefixer({
            cascade: false,
            grid: true
        })))
        .pipe($.if(!$.isDev, $.mincss({
            compatibility: "ie8", level: {
                1: {
                    specialComments: 0,
                    removeEmpty: true,
                    removeWhitespace: true
                },
                2: {
                    mergeMedia: true,
                    removeEmpty: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removeDuplicateRules: true,
                    removeUnusedAtRules: false
                }
            }
        })))
        .pipe($.if(!$.isDev, $.rename({
            suffix: ".min"
        })))
        .pipe($.plumber.stop())
        .pipe($.if($.isDev, $.sourcemaps.write("./maps/")))
        .pipe($.gulp.dest('./dist/styles'))
        .pipe($.debug({
            "title": "Styles"
        }))
        .pipe($.bs.stream());
    });
};