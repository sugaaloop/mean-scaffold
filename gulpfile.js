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
    return gulp.src(paths.cssPlugins)
        .pipe(_$.cleanCss())
        .pipe(_$.concat('css_plugins.min.css'))
        .pipe(gulp.dest(paths.distSrc));
});

gulp.task('appCss', ['cssPlugins'], function () {
    return gulp.src(paths.appCss)
        .pipe(_$.cleanCss({ relativeTo: paths.distSrc, target: paths.distSrc }))
        .pipe(_$.concat('application.min.css'))
        .pipe(gulp.dest(paths.distSrc));
});

gulp.task('scripts_prod', ['clean'], function () {
    return gulp.src(paths.scripts)
        .pipe(_$.uglify())
        .pipe(_$.concat(config.scriptsDestFile))
        .pipe(gulp.dest(config.distSrc));
});

gulp.task('scripts_dev', ['clean'], function () {
    return gulp.src((config.scripts))
        .pipe(_$.rename({ dirname: '' }))
        .pipe(gulp.dest(config.distSrc));
});

gulp.task('cache_bust', [(config.isProd ? 'scripts_prod' : 'scripts_dev')], function () {
    return gulp.src(config.distSrc + '/*.js')
        .pipe(_$.buster({ relativePath: 'public' }))
        .pipe(gulp.dest(config.distSrc));
});

gulp.task('inject_scripts', ['html', 'cache_bust'], function () {
    var busters = require('./' + config.distSrc + '/busters.json');
    var source = gulp.src('dist/*.js', { cwd: __dirname + '/public' });
    return gulp.src(config.distSrc + '/index.html')
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

gulp.task('watch', function() {
    gulp.watch(config.scripts, ['inject_scripts']);
    gulp.watch(config.html, ['inject_scripts']);
});

gulp.task('default', ['inject_scripts', 'delete_busters', 'watch']);
