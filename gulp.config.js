/**
 * Gulp config
 */


'use strict';

module.exports = function(argv) {
    var config = {
        distSrc: 'public/dist',
        scripts: [
            'public/libs/**/*.js',
            'public/app/**/*.js'
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
        index: 'public/index.html',
        isProd: argv.prod ? true : false
    };

    return config;
}
