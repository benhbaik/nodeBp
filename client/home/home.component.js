angular.
    module('home').
    component('home', {
        templateUrl: 'home/home.html',
        // templateUrl: 'yummm-search/search.html'
        controller: ['User', function(User) {
            var vm = this;
            vm.login = function(username, password) {
                var userInfo = {
                    username: username,
                    password: password
                };
                User.save(userInfo, function(response) {
                    console.log(response.success);
                });
            }
        }]
    });
