(function () {
    'use strict';
    angular.module('net.bobhennessey.beers').component('addBeerForm', {
        templateUrl: 'app/modules/beers/addBeerForm/index.html',
        bindings: {
            beer: '=?'
        },
        controller: ['beers', ctrl],
        controllerAs: 'vm'
    };

    function ctrl(beers) {
        var vm = this;

        vm.$onInit = function() {
            if (typeof vm.beer === 'undefined') {
                vm.beer = beerService.newBeer();
                vm.beer.isEditing = true;
            }
        }

        vm.submitBeer = function () {
            beers.addBeer(vm.beer).then(function (response) {
                vm.beer = beerService.newBeer();
                vm.beer.isEditing = true;
            });
        }
    }
})();
