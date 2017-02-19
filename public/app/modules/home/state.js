(function () {
    'use strict';
    angular.module('net.bobhennessey.home').factory('state', factory);
    factory.$inject = ['drupal', '$timeout'];
    function factory(drupal, $timeout) {
        var state = {};

        state.resetState = function () {
            state.checkAuthenticated();
        }

        state.checkAuthenticated = function () {
            drupal.connect().then(function (user) {
                $timeout(function () {
                    state.isAuthenticated = drupal.currentUser().isAuthenticated();
                });
            });
        }

        state.logout = function () {
            return drupal.userLogout().then(function () {
                state.checkAuthenticated();
            });
        }

        state.resetState();
        return state;
    }
})();
