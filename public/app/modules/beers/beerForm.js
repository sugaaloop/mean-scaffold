(function () {
    'use strict';
    angular.module('net.bobhennessey.beers').directive('beerForm', beerForm);
    beerForm.$inject = ['beerService'];
    function beerForm(beerService) {
        var directive = {};

        directive.restrict = 'E';
        directive.templateUrl = 'app/modules/beers/beerForm.html';
        directive.scope = {
            beer: '=?'
        }
        directive.link = link;

        return directive;

        function link(scope, elem, attrs, vm) {
            if (typeof scope.beer === 'undefined') {
                scope.beer = beerService.newBeer();
                scope.beer.isEditing = true;
            }
        }
    }
})();