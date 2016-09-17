(function () {
    'use strict';
    angular.module('net.bobhennessey.home').controller('beerCtrl', beerCtrl);
    beerCtrl.$inject = ['beerService'];
    function beerCtrl(beerService) {
        var vm = this;
        vm.beers = beerService;

        var init = function () {
            vm.title = "Beer Time.";
            beerService.getBeers();
        }
        
        init();

    }
})();