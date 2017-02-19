(function () {
    'use strict';
    angular.module('net.bobhennessey.home').component('pet', {
        templateUrl: 'app/modules/home/pet/index.html',
        controller: ['$scope', ctrl],
        controllerAs: 'vm'
    });

    function ctrl($scope) {
        var vm = this;
    }
})();
