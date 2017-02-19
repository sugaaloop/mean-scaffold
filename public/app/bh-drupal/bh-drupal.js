function bhDrupal_rest_pre_process(xhr, data) {
    xhr.withCredentials = true;
}

(function () {
    'use strict';
    var app = angular.module('bhDrupal', []);
    app.run(['drupal', function (drupal) {
        drupal.modules['bhDrupal'] = true;
    }]);

    app.directive('drupalNode', directive);
    directive.$inject = ['drupal'];
    function directive(drupal){
        var contentItem = {
            restrict: 'A',
            controller: ['$timeout', ctrl],
            controllerAs: 'bhDrupal',
            scope: false,
            link: link,
            bindToController: {
                drupalNode: '<'
            }
        };
        function ctrl($timeout) {
            var vm = this;
            vm.myNode;

            drupal.nodeLoad(vm.drupalNode).then(function (node) {
                vm.node = node;
                
                // $timeout(function () {
                //     vm.data = node;
                // });
            });

            //node.set('field_name', 0, { value: 'kick ass breed' });

            vm.saveNode = function () {
                vm.node.save().then(function (response) { console.log(response)});
            }
        }
        function link(scope, elem, attrs, vm) {
            elem.on('click', function (event) {
                console.log("clicked");
            });
            elem.addClass('hover-border');
        }
        return contentItem;
    }
})();
