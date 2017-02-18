(function () {
    'use strict';
    angular.module('net.bobhennessey.beers').factory('beers', beers);
    beers.$inject = ['beerApi'];
    function beers(beerApi) {
        var factory = {};
        factory.beerList = [];

        factory.getBeers = function () {
            return beerApi.getBeers().then(function (response) {
                factory.beerList = response.data;
            });
        }

        factory.getBeer = function (id) {
            return beerApi.getBeer(id);
        }

        factory.addBeer = function (beer) {
            return beerApi.addBeer(beer);
        }

        factory.newBeer = function (name, brewer, style, abv) {
            return new Beer(name, brewer, style, abv);
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
