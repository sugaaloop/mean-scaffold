(function () {
    'use strict';
    angular.module('mean-scaffold').config(config);
    config.$inject = ['$stateProvider', '$locationProvider'];
    function config($stateProvider, $locationProvider) {

        $stateProvider
            .state({
                name: 'layout',
                abstract: true,
                templateUrl: 'app/layout.html'
            })
            .state({
                name: 'layout.home',
                abstract: true,
                templateUrl: 'app/components/home/views/main/index.html',
                controller: 'homeCtrl'
            })
            .state({
                name: 'layout.home.index',
                url: '/',
                template: '<home-component></home-component>'
            });

        $locationProvider.html5Mode(true);

    }
})();
