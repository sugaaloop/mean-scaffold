(function () {
    'use strict';
    var app = angular.module('bhDrupal', []);

    app.directive('drupalContentItem', directive);
    directive.$inject = ['drupal'];
    function directive(drupal){
        var contentItem = {
            restrict: 'A',
            template: '<p>Drupal Content Item</p><p>{{ vm.data }}</p>',
            link: link,
            controller: ['$scope', ctrl],
            controllerAs: 'vm',
            bindToController: {
                node: '<'
            }
        };

        function link(scope, elem, attrs, vm) {

        }

        function ctrl($scope) {
            var vm = this;

            // drupal.connect().then(function() {
            //     var user = drupal.currentUser();
            //     var authenticated = user.isAuthenticated();
            //     console.log(user, authenticated);
            //
            //     drupal.nodeLoad(4).then(function (node) {
            //         console.log(node);
            //     });
            // });

            drupal.userLogin('admin', 'pizza247').then(function (user) {
                console.log(user);
                var me = drupal.currentUser();
                console.log(me);
            });

            drupal.nodeLoad(vm.node).then(function (node) {
                node.entity.field_breedid[0].value = 'some other breed';
                node.save().then(function (response) { console.log(response)});
                $scope.$apply(function () {
                    vm.data = node;
                });
            });
        }

        return contentItem;
    }
})();
