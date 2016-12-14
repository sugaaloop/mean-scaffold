(function () {
    'use strict';
    angular.module('net.bobhennessey.utils').directive('footer', footer);
    footer.$inject = [];
    function footer() {
        var directive = {};

        directive.restrict = 'E';
        directive.templateUrl = 'app/modules/footer/footer.html';

        return directive;
    }
})();
