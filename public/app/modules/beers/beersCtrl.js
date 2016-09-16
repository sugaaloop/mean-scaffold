(function () {
    'use strict';
    angular.module('net.bobhennessey.home').controller('beersCtrl', beersCtrl);
    beersCtrl.$inject = [];
    function beersCtrl() {
        var vm = this;
        vm.title = "Beer Time.";
    }
})();