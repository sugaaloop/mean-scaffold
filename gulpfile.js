// Usage: [from root] : gulp

'use strict';

var gulp = require('gulp'),
    argv = require('yargs').argv,
    _$ = require('gulp-load-plugins')(),
    del = require('del');

// get environment -- defaults to dev
var envIsProd = argv.prod ? true : false;
console.log(envIsProd ? 'Running gulp for production' : 'Running gulp for development');

var paths = {
    distSrc: 'public/dist',
    html: [
        'public/views/*.html',
        'public/app/*.html',
        'public/app/modules/**/*.html'
    ],
    scripts: [
        'public/libs/jdrupal/jdrupal.min.js',
        'public/libs/angular-drupal/angular-drupal.js',
        'public/libs/ui-router/release/angular-ui-router.js',
        'public/app/app.js',
        'public/app/config/*.js',
        'public/app/modules/**/*.js'
    ],
    scriptsDestFile: 'scripts.min.js',
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
//         .pipe(_$.cleanCss())
//         .pipe(_$.concat('css_plugins.min.css'))
//         .pipe(gulp.dest(paths.distSrc));
// });

// gulp.task('appCss', ['cssPlugins'], function () {
//     return gulp.src(paths.appCss)
//         .pipe(_$.cleanCss({ relativeTo: paths.distSrc, target: paths.distSrc }))
//         .pipe(_$.concat('application.min.css'))
//         .pipe(gulp.dest(paths.distSrc));
// });


gulp.task('html', ['clean'], function () {
    return gulp.src(paths.html)
        .pipe(_$.rename({dirname: ''}))
        .pipe(gulp.dest(paths.distSrc));
});

gulp.task('scripts_prod', ['clean'], function () {
    return gulp.src(paths.scripts)
        .pipe(_$.uglify())
        .pipe(_$.concat(paths.scriptsDestFile))
        .pipe(gulp.dest(paths.distSrc));
});

gulp.task('scripts_dev', ['clean'], function () {
    return gulp.src((paths.scripts))
        .pipe(_$.rename({ dirname: '' }))
        .pipe(gulp.dest(paths.distSrc));
});

gulp.task('cache_bust', [(envIsProd ? 'scripts_prod' : 'scripts_dev')], function () {
    return gulp.src(paths.distSrc + '/*.js')
        .pipe(_$.buster({ relativePath: 'public' }))
        .pipe(gulp.dest(paths.distSrc));
});

gulp.task('inject_scripts', ['html', 'cache_bust'], function () {
    var busters = require('./' + paths.distSrc + '/busters.json');
    var source = gulp.src('dist/*.js', { cwd: __dirname + '/public' });
    return gulp.src(paths.distSrc + '/index.html')
        .pipe(_$.inject(source, {
            transform: function (filepath) {
                var hash = busters[filepath.slice(1)];
                return '<script src="' + filepath + '?' + hash + '"></script>';
            }
        }))
        .pipe(gulp.dest(paths.distSrc));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['inject_scripts']);
    gulp.watch(paths.html, ['inject_scripts']);
});

gulp.task('default', ['inject_scripts', 'watch']);
