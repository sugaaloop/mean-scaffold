// Usage: [from root] : gulp

'use strict';

var gulp = require('gulp'),
    argv = require('yargs').argv,
    plugins = require('gulp-load-plugins')(),
    del = require('del');

var paths = {
    distSrc: 'public/dist',
    appDataSrc: 'public/dist/app_data',
    scripts: [
        'public/libs/angular/angular.js',
        'public/libs/ui-router/release/angular-ui-router.js',
        'public/app/app.js',
        'public/app/config/*.js',
        'public/app/modules/**/*.js'
    ],   
    // sassSrc: [        
    //     'Content/SCSS/**/*.scss'
    // ],
    // appCss: [
    //     'Content/CSS/application.css'
    // ],
    // cssPlugins: [
    //     'Content/CSS/*.css',
    //     '!Content/CSS/application.css',
    //     '!Content/CSS/application.min.css'
    // ],
    index: 'public/views/index.html'
}

gulp.task('clean', function () {
    return del(paths.distSrc + '/*');
});

// gulp.task('cssPlugins', ['clean'], function () {
//     return gulp.src(paths.cssPlugins)
//         .pipe(plugins.cleanCss())
//         .pipe(plugins.concat('css_plugins.min.css'))
//         .pipe(gulp.dest(paths.distSrc));
// });

// gulp.task('appCss', ['cssPlugins'], function () {
//     return gulp.src(paths.appCss)        
//         .pipe(plugins.cleanCss({ relativeTo: paths.distSrc, target: paths.distSrc }))        
//         .pipe(plugins.concat('application.min.css'))
//         .pipe(gulp.dest(paths.distSrc));
// });

gulp.task('scripts', ['clean'], function () {
    return gulp.src(paths.scripts)
        .pipe(plugins.uglify())
        .pipe(plugins.concat('scripts.min.js'))
        .pipe(gulp.dest(paths.distSrc));
});

// gulp.task('cacheBust', ['scripts'], function () {
//     return gulp.src(paths.distSrc + '/*')
//         .pipe(plugins.buster())
//         .pipe(gulp.dest(paths.appDataSrc));
// });

gulp.task('default', ['scripts']);