(function () {
    'use strict';

    angular.module('net.bobhennessey.utils', []);

    angular.module('net.bobhennessey.dependencies', [
        'ui.router'
    ]);

    angular.module('net.bobhennessey', [
        'net.bobhennessey.dependencies',
        'net.bobhennessey.utils',
        'net.bobhennessey.home',
        'net.bobhennessey.beers'
    ]);
})();