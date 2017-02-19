(function () {
    'use strict';
    angular.module('net.bobhennessey.home').controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['state'];
    function homeCtrl(state) {
        var vm = this;
        vm.title = 'bobhennessey.net';
        vm.state = state;
    }
})();
