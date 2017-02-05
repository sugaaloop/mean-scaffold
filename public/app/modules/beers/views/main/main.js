(function () {
    'use strict';
    angular.module('net.bobhennessey.beers').controller('beersCtrl', beersCtrl);
    beersCtrl.$inject = ['beers'];
    function beersCtrl(beers) {
        var vm = this;

        beers.getBeers();
    }
})();
