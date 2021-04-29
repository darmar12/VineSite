'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    del: require('del'),
    debug: require('gulp-debug'),
    sprite: require('gulp-svg-sprite'),
    favicon: require('gulp-favicons'),
    if: require('gulp-if'),
    newer: require('gulp-newer'),
    imagemin: require('gulp-imagemin'),
    imageminPngquant: require('imagemin-pngquant'),
    imageminZopfli: require('imagemin-zopfli'),
    imageminMozjpeg: require('imagemin-mozjpeg'),
    imageminGiflossy: require('imagemin-giflossy'),
    pug: require('gulp-pug'),
    replace: require('gulp-replace'),
    sourcemaps: require('gulp-sourcemaps'),
    plumber: require('gulp-plumber'),
    sass: require('gulp-sass'),
    groupMedia: require('gulp-group-css-media-queries'),
    autoprefixer: require('gulp-autoprefixer'),
    mincss: require('gulp-clean-css'),
    rename: require('gulp-rename'),
    webpack: require('webpack'),
    stream: require('webpack-stream'),
    path: {
        tasks: require('./gulp-tasks/config.js'),
    },
    isDev: !process.env.NODE_ENV || process.env.NODE_ENV == 'developer',
};

$.path.tasks.forEach((path) => {
    require(path)();
});