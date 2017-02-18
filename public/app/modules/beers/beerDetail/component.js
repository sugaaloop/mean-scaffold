(function () {
    'use strict';
    angular.module('net.bobhennessey.beers').component('beerDetail', {
        templateUrl: 'app/modules/beers/beerDetail/index.html',
        bindings: {
            beer: '=?'
        },
        controller: ['beers', ctrl],
        controllerAs: 'vm'
    });

    function ctrl(beers) {
        var vm = this;

        vm.$onInit = function() {
            if (typeof vm.beer === 'undefined') {
                vm.beer = beers.newBeer();
                vm.beer.isEditing = true;
            }
        }

        vm.submitBeer = function (beer) {
            beers.addBeer(beer).then(function (response) {
                vm.beer = beers.newBeer();
                vm.beer.isEditing = true;
            });
        }
    }
})();
