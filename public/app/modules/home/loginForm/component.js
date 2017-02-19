(function () {
    'use strict';
    angular.module('net.bobhennessey.home').component('loginForm', {
        templateUrl: 'app/modules/home/loginForm/index.html',
        controller: ['drupal', '$state', 'state', ctrl],
        controllerAs: 'vm'
    });

    function ctrl(drupal, $state, state) {
        var vm = this;

        vm.loginSubmit = function () {
            drupal.userLogin(vm.username, vm.password).then(function(user) {
                state.checkAuthenticated();
            });
        }
    }
})();
