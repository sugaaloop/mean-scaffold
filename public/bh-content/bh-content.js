(function () {
    'use strict';
    var app = angular.module('bhContent', []);

    app.directive('drupalContentItem', directive);
    directive.$inject = ['drupal'];
    function directive(drupal){
        var contentItem = {
            restrict: 'A',
            link: link,
            controller: [ctrl],
            controllerAs: 'vm',
            bindToController: {
                node: '&'
            }
        };

        function link(scope, elem, attrs, vm) {

        }

        function ctrl() {
            var vm = this;

            drupal.nodeLoad(4).then(function (node) {
                vm.data = node;
            });
        }

        return contentItem;
    }
})();
