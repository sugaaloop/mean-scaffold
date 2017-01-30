(function () {
    'use strict';
    angular.module('net.bobhennessey.home').controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$http'];
    function homeCtrl($http) {
        var vm = this;
        vm.title = "bobhennessey.net";
        vm.blogs;

        $http.get('http://dev-bhnet-headless.pantheonsite.io/blogs').then(function (response) { vm.blogs = response.data; });
    }
})();
