angular.
    module('core.user').
    factory('User', ['$resource',
        function($resource) {
            return $resource('/api/login', {username: '@username', password: '@password'});
        }
    ]);
