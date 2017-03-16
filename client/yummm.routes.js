'use strict';

angular.module('yummm').
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/home', {
            template: '<home></home>'
        });
        $routeProvider.when('/search', {
            template: '<search></search>'
        });

        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
