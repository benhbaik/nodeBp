'use strict';

angular.
    module('registration').
        component('registration', {
            templateUrl: 'registration/registration.html',
            controller: ['$http',
                function registrationController($http) {
                    var vm = this;

                    vm.register = function(username, password) {
                        var userInfo = {
                            'username': username,
                            'password': password
                        }
                        $http.post('/api/users', userInfo).
                            then(function(data) {
                                console.log(data);
                            });
                    }
                }
            ]
        });
