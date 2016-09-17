(function () {
    'use strict';
    angular.module('net.bobhennessey.beers').factory('beerApi', beerApi);
    beerApi.$inject = ['$http'];
    function beerApi($http) {
        var factory = {};

        factory.getBeers = function () {
            return $http.get('/api/beers');
        }

        factory.getBeer = function (id) {
            return $http.get('/api/beers/id');
        }

        factory.addBeeer = function (beer) {
            return $http.post('/api/beers', beer);
        }

        return factory;
    }
})();