(function () {
    'use strict';

    angular.module('net.bobhennessey.home', []);

    angular.module('net.bobhennessey.beers', []);

    angular.module('net.bobhennessey.dependencies', [
        'ui.router'
    ]);

    angular.module('net.bobhennessey', [
        'net.bobhennessey.dependencies',
        'net.bobhennessey.home',
        'net.bobhennessey.beers'
    ]);
})();