(function () {
    'use strict';
    angular.module('net.bobhennessey').config(config);
    config.$inject = ['$stateProvider', '$locationProvider', '$provide'];
    function config($stateProvider, $locationProvider, $provide) {

        var env = 'prod';
        var prodUrlPrefix = 'dist/';

        $stateProvider
            .state({
                name: 'layout',
                abstract: true,
                templateUrl: (env === 'prod' ? prodUrlPrefix : 'views/') + 'layout.html'
            })
            .state({
                name: 'layout.home',
                url: '/',
                templateUrl: (env === 'prod' ? prodUrlPrefix : 'app/modules/home/') + 'homeIndex.html'
            })
            .state({
                name: 'layout.beers',
                url: '/beers',
                templateUrl: (env === 'prod' ? prodUrlPrefix : 'app/modules/beers/') + 'beersIndex.html'
            });

        $locationProvider.html5Mode(true);

        // drupal config
        $provide.value('drupalSettings', {
            sitePath: 'http://dev-bhnet-headless.pantheonsite.io/'
        });

    }
})();
