(function () {
    'use strict';
    angular.module('net.bobhennessey.structure').component('header', {
        templateUrl: 'app/modules/structure/header/header.html',
        controller: ['state', '$state', function (state, $state) {
            var vm = this;
            vm.state = state;
            vm.logout = function () {
                state.logout().then(function () {
                    $state.go('layout.home.index', { reload: true });
                });
            }
        }],
        controllerAs: 'vm'
    });
})();
