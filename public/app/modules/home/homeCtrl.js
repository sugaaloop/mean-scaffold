(function () {
    'use strict';
    angular.module('net.bobhennessey.home').controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = [];
    function homeCtrl() {
        var vm = this;
        vm.title = "bobhennessey.net";
    }
})();