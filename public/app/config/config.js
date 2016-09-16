(function () {
    'use strict';
    angular.module('net.bobhennessey').config(config);
    config.$inject = ['$stateProvider', '$locationProvider'];
    function config($stateProvider, $locationProvider) {

        $stateProvider
            .state({
                name: 'layout',
                abstract: true,
                templateUrl: 'views/layout.html'
            })
            .state({
                name: 'layout.home',
                url: '/',
                templateUrl: 'app/modules/home/index.html'
            })
            .state({
                name: 'layout.beers',
                url: '/beers',
                templateUrl: 'app/modules/beers/index.html'
            });

        $locationProvider.html5Mode(true);

    }
})();