(function () {
    'use strict';
    angular.module('net.bobhennessey.utils').directive('header', header);
    header.$inject = [];
    function header() {
        var directive = {};

        directive.restrict = 'E';
        directive.templateUrl = 'app/modules/header/header.html';

        return directive;
    }
})();
