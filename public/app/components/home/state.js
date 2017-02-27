(function () {
    'use strict';
    angular.module('mean-scaffold.home').factory('state', factory);
    factory.$inject = [];
    function factory() {
        var state = {};

        state.resetState = function () {
        }

        state.resetState();
        return state;
    }
})();
