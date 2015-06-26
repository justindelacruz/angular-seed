(function(angular) {
    'use strict';

    angular.module('app.index', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: '/src/app/index/index.tpl.html',
                controller: 'IndexController'
            });
        }])
})(angular);
