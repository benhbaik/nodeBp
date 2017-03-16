'use strict';

angular.
    module('home').
    component('home', {
        templateUrl: 'home/home.html',
        controller: ['$http', '$location',
            function homeController($http, $location) {
                var vm = this;
                vm.login = function(username, password) {
                    var userInfo = {
                        username: username,
                        password: password
                    };
                    $http.post('/api/login', userInfo).
                        then(function(data) {
                            $location.path('/dashboard');
                        });
                }
            }
        ]
    });
