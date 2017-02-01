(function () {
    'use strict';
    angular.module('net.bobhennessey').config(config);
    config.$inject = ['$stateProvider', '$locationProvider', '$provide'];
    function config($stateProvider, $locationProvider, $provide) {

        $stateProvider
            .state({
                name: 'layout',
                abstract: true,
                templateUrl: 'app/layout.html'
            })
            .state({
                name: 'layout.home',
                url: '/',
                templateUrl: 'app/modules/home/views/main/index.html'
            })
            .state({
                name: 'layout.beers',
                url: '/beers',
                templateUrl: 'app/modules/beers/views/main/index.html'
            });

        $locationProvider.html5Mode(true);

        // drupal config
        $provide.value('drupalSettings', {
            sitePath: 'http://dev-bhnet-headless.pantheonsite.io'
        });

    }
})();
