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
                abstract: true,
                templateUrl: 'app/modules/home/views/main/index.html',
                controller: 'homeCtrl'
            })
            .state({
                name: 'layout.home.index',
                url: '/',
                template: '<p>INDEX</p>'
            })
            .state({
                name: 'layout.home.login',
                url: '/login',
                template: '<login-form></login-form>'
            })
            .state({
                name: 'layout.beers',
                url: '/beers',
                templateUrl: 'app/modules/beers/views/main/index.html',
                controller: 'beersCtrl'
            });

        $locationProvider.html5Mode(true);

        // drupal config
        $provide.value('drupalSettings', {
            sitePath: 'http://dev-bhnet-headless.pantheonsite.io'
        });

    }
})();
