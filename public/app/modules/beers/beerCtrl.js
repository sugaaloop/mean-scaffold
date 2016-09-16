(function () {
    'use strict';
    angular.module('net.bobhennessey.home').controller('beerCtrl', beerCtrl);
    beerCtrl.$inject = ['beerService'];
    function beerCtrl(beerService) {
        var vm = this;

        var init = function () {
            vm.title = "Beer Time.";
            beerService.getBeers().then(function (response) {
                vm.beers = response.data;
            });
        }
        
        init();

    }
})();