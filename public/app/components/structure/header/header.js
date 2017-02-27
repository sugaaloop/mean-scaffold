(function () {
    'use strict';
    angular.module('mean-scaffold.structure').component('header', {
        templateUrl: 'app/components/structure/header/header.html',
        controller: ['state', '$state', function (state, $state) {
            var vm = this;
        }],
        controllerAs: 'vm'
    });
})();
