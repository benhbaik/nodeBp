angular.module('myApp').
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/home', {
            template: '<home></home>'
        });

        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
