/**
 * Gulp config
 */


'use strict';

module.exports = function(argv) {
    var config = {
        distSrc: 'dist',
        scripts: (argv.prod ?
            'dist/*.js' :
            [
                'libs/jdrupal/jdrupal.min.js',
                'libs/angular-drupal/angular-drupal.js',
                'libs/ui-router/release/angular-ui-router.js',
                'app/**/*.js'
            ]
        ),
        html: [
            './**/*.html'
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
        index: 'views/index.html',
        isProd: argv.prod ? true : false
    };

    return config;
}
