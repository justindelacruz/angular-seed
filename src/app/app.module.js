(function(angular) {
    'use strict';

    angular.module('app', [
        'ngRoute',
        'app.index'
    ]).
        config(['$routeProvider', function($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/'});
        }]);
})(angular);

