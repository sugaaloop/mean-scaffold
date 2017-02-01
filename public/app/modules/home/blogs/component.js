(function () {
    'use strict';
    angular.module('net.bobhennessey.home').component('blogs', {
        templateUrl: 'app/modules/home/blogs/index.html',
        controller: ['drupal', ctrl],
        controllerAs: 'vm'
    }

    function ctrl(drupal) {
        var vm = this;

        vm.$onInit = function() {
            drupal.connect().then(function() {
                var user = drupal.currentUser();
                var authenticated = user.isAuthenticated();
                console.log(user, authenticated);
            });

            drupal.viewsLoad('api/blogs').then(function(response) {
                vm.blogs = response.results;
            });

            // $http.get('http://dev-bhnet-headless.pantheonsite.io/api/blogs').then(function (response) {
            //     vm.blogs = response.data;
            //     console.log(response.data);
            // });
        }
    }
})();
