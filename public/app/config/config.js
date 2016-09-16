(function () {
    'use strict';
    angular.module('net.bobhennessey').config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {

        //$urlRouterProvider.otherwise('/');
        $stateProvider
            .state({
                name: 'home',
                url: '/',
                templateUrl: '/app/modules/home/index.html'
            })
            .state({
                name: 'beers',
                url: '/beers',
                templateUrl: '/app/modules/beers/index.html'
            });

    }
})();