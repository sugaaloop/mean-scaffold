(function () {
    'use strict';
    angular.module('net.bobhennessey.beers').component('beerList', {
        templateUrl: 'app/modules/beers/beerList/index.html',
        controller: ['beers', ctrl],
        controllerAs: 'vm'
    });

    function ctrl(beers) {
        var vm = this;
        vm.beers = beers;
        //vm.selectedBeer;
    }
})();
