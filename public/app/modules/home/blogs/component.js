(function () {
    'use strict';
    angular.module('net.bobhennessey.home').component('blogs', {
        templateUrl: 'app/modules/home/blogs/index.html',
        controller: ['drupal', '$scope', ctrl],
        controllerAs: 'vm'
    });

    function ctrl(drupal, $scope) {
        var vm = this;
        vm.something = 'adsf';

        vm.$onInit = function() {

        }
    }
})();
