(function () {
    'use strict';
    angular.module('net.bobhennessey.home').controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$http', 'drupal'];
    function homeCtrl($http, drupal) {
        var vm = this;
        
        vm.title = "bobhennessey.net";
    }
})();
