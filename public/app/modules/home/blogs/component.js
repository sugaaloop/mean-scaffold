(function () {
    'use strict';
    angular.module('net.bobhennessey.home').component('blogs', {
        templateUrl: 'app/modules/home/blogs/index.html',
        controller: ['drupal', '$scope', ctrl],
        controllerAs: 'vm'
    });

    function ctrl(drupal, $scope) {
        var vm = this;
        vm.something = 'adsf';

        vm.$onInit = function() {
            drupal.connect().then(function() {
                var user = drupal.currentUser();
                var authenticated = user.isAuthenticated();
                console.log(user, authenticated);
            });

            drupal.viewsLoad('api/blogs').then(function(response) {
                $scope.$apply(function() {
                    vm.blogs = response.results;
                });
            });

            // $http.get('http://dev-bhnet-headless.pantheonsite.io/api/blogs').then(function (response) {
            //     vm.blogs = response.data;
            //     console.log(response.data);
            // });
        }
    }
})();
