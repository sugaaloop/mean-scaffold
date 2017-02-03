/**
 * gulpfile.js
 * Usage: [from root] : gulp
 */

'use strict';

var gulp = require('gulp'),
    argv = require('yargs').argv,
    _$ = require('gulp-load-plugins')(),
    del = require('del');

var config = require('./gulp.config')(argv);

console.log(config.isProd ? 'Running gulp for production' : 'Running gulp for development');

gulp.task('clean', function () {
    return del(config.distSrc + '/*');
});

gulp.task('cssPlugins', ['clean'], function () {
    return gulp.src(config.cssPlugins)
        .pipe(_$.cleanCss())
        .pipe(_$.concat('css_plugins.min.css'))
        .pipe(gulp.dest(paths.distSrc));
});

gulp.task('appCss', ['cssPlugins'], function () {
    return gulp.src(config.appCss)
        .pipe(_$.cleanCss({ relativeTo: paths.distSrc, target: paths.distSrc }))
        .pipe(_$.concat('application.min.css'))
        .pipe(gulp.dest(paths.distSrc));
});

gulp.task('scripts_prod', ['clean'], function () {
    return gulp.src(config.scripts)
        .pipe(_$.uglify())
        .pipe(_$.concat(config.scriptsDestFile))
        .pipe(gulp.dest(config.distSrc));
});

gulp.task('cache_bust_prod', ['scripts_prod'], function () {
    return gulp.src(config.distSrc + '/*.js')
        .pipe(_$.buster({ relativePath: 'public' }))
        .pipe(gulp.dest(config.distSrc));
});

gulp.task('cache_bust_dev', ['clean'], function () {
    return gulp.src(config.scripts)
        .pipe(_$.buster())
        .pipe(gulp.dest(config.distSrc));
});

gulp.task('inject_scripts', [(config.isProd ? 'cache_bust_prod' : 'cache_bust_dev')], function () {
    var busters = require('./' + config.distSrc + '/busters.json');
    var sourceGlob = config.isProd ? 'public/dist/*.js' : config.scripts;
    console.log('__dirname: ', __dirname);
    var source = gulp.src(sourceGlob);
    return gulp.src(config.index)
        .pipe(_$.inject(source, {
            transform: function (filepath) {
                var hash = busters[filepath.slice(1)];
                console.log(filepath + '?' + hash);
                return '<script src="' + filepath + '?' + hash + '"></script>';
            }
        }))
        .pipe(gulp.dest(config.distSrc));
});

gulp.task('delete_busters', ['inject_scripts'], function () {
    return del(config.distSrc + '/busters.json');
});

gulp.task('watch', function() {
    gulp.watch(config.scripts, ['inject_scripts', 'delete_busters']);
    //gulp.watch(config.html, ['inject_scripts', 'delete_busters']);
});

gulp.task('default', ['inject_scripts', 'delete_busters', 'watch']);
