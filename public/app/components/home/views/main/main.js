(function () {
    'use strict';
    angular.module('mean-scaffold.home').controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = [];
    function homeCtrl() {
        var vm = this;
        vm.title = 'Your MEAN Site';
    }
})();
