(function () {
    'use strict';

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
