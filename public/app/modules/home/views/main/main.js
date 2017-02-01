(function () {
    'use strict';
    angular.module('net.bobhennessey.home').controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$http', 'drupal'];
    function homeCtrl($http, drupal) {
        var vm = this;
        vm.title = "bobhennessey.net";

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
})();
