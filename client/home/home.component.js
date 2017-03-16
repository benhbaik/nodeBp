'use strict';

angular.
    module('home').
    component('home', {
        templateUrl: 'home/home.html',
        controller: ['User',
            function homeController(User) {
                var vm = this;
                vm.login = function(username, password) {
                    var userInfo = {
                        username: username,
                        password: password
                    };
                    User.login(userInfo, function(response) {
                        sessionStorage.setItem('token', response.token);
                    });
                }
            }
        ]
    });
