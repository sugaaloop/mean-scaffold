(function () {
    'use strict';

    angular.module('net.bobhennessey.structure', []);
    angular.module('net.bobhennessey.home', []);
    angular.module('net.bobhennessey.beers', []);


    angular.module('net.bobhennessey.dependencies', [
        'ui.router',
        'angular-drupal'
    ]);

    angular.module('net.bobhennessey', [
        'net.bobhennessey.dependencies',
        'net.bobhennessey.structure',
        'net.bobhennessey.home',
        'net.bobhennessey.beers'
    ]);
})();
