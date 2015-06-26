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

;(function(angular) {
    'use strict';

    angular.module('app.index', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: '/src/app/index/index.tpl.html',
                controller: 'IndexController'
            });
        }])
})(angular);
;(function(angular) {
    'use strict';

    angular.module('app.index')
        .controller('IndexController', [function() {

        }]);
})(angular);
;angular.module('app.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("Users/justin/Sites/angular-seed/src/app/index/index.tpl.html",
    "<p>This is the partial for view 1.</p>");
}]);
