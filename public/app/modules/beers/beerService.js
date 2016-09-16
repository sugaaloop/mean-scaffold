(function () {
    'use strict';
    angular.module('net.bobhennessey.beers').factory('beerService', beerService);
    beerService.$inject = ['$http'];
    function beerService($http) {
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

        factory.newBeer = function () {
            return new Beer();
        }



        function Beer(name, brewer, style, abv) {
            this.name = typeof name === 'undefined' ? '' : name;
            this.brewer = typeof brewer === 'undefined' ? '' : brewer;
            this.style = typeof style === 'undefined' ? '' : style;
            this.abv = typeof abv === 'undefined' ? 0.0 : abv;
        }

        return factory;
    }
})();