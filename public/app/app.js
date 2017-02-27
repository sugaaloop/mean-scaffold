(function () {
    'use strict';

    angular.module('mean-scaffold.structure', []);
    angular.module('mean-scaffold.home', []);

    angular.module('mean-scaffold.dependencies', [
        'ui.router'
    ]);

    angular.module('mean-scaffold', [
        'mean-scaffold.dependencies',
        'mean-scaffold.structure',
        'mean-scaffold.home'
    ]);
    
})();
