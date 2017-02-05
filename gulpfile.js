/**
 * gulpfile.js
 * Usage: [from root] : gulp
 */

'use strict';

var gulp = require('gulp'),
    argv = require('yargs').argv,
    _$ = require('gulp-load-plugins')(),
    Q = require('q'),
    browserSync = require('browser-sync').create(),
    del = require('del');

// get configuration
var config = require('./gulp.config')(argv);

// change dir into public
process.chdir('public');

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

gulp.task('scripts', ['clean'], function () {
    if (config.isProd) {
        return gulp.src(config.scripts)
            .pipe(_$.uglify())
            .pipe(_$.concat(config.scriptsDestFile))
            .pipe(gulp.dest(config.distSrc));
    } else {
        return Q();
    }
});

gulp.task('cache_bust', ['scripts'], function () {
        return gulp.src(config.scripts)
            .pipe(_$.buster())
            .pipe(gulp.dest(config.distSrc));
});

gulp.task('inject_scripts', ['cache_bust'], function () {
    var busters = require('./public/' + config.distSrc + '/busters.json');
    var source = gulp.src(config.scripts);
    return gulp.src(config.index)
        .pipe(_$.inject(source, {
            transform: function (filepath) {
                var hash = busters[filepath.slice(1)];
                return '<script src="' + filepath + '?' + hash + '"></script>';
            }
        }))
        .pipe(gulp.dest(config.distSrc));
});

gulp.task('delete_busters', ['inject_scripts'], function () {
    return del(config.distSrc + '/busters.json');
});

gulp.task('rebuild', ['inject_scripts', 'delete_busters'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch', function() {
    browserSync.init({
        proxy: 'localhost:8282'
    });
    gulp.watch(config.scripts, ['rebuild']);
    gulp.watch(config.html, ['rebuild']);
});

//gulp.task('default', ['inject_scripts', 'watch']);
gulp.task('default', ['inject_scripts', 'delete_busters', 'watch']);
