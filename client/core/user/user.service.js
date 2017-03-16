'use strict';

angular.
    module('core.user').
    config(['$resourceProvider', function($resourceProvider) {
        $resourceProvider.defaults.actions = {
              create: {method: 'POST'},
              get:    {method: 'GET'},
              getAll: {method: 'GET', isArray:true},
              update: {method: 'PUT'},
              delete: {method: 'DELETE'}
        };
    }]).
    factory('User', ['$resource',
        function($resource) {
            var userDefaults = {username: '@username', password: '@password'};
            var idDefault = {id: '@id'};
            var getOne = $resource('/api/users/:id', idDefault);
            var update = $resource('/api/users/:id', idDefault);
            var remove = $resource('/api/users/:id', idDefault);
            var signup = $resource('/api/users', userDefaults);
            var get = $resource('/api/users');
            var login = $resource('/api/login', userDefaults);
            var logout = $resource('/api/logout', userDefaults);


            return {
                'signup': signup.create,
                'get': get.getAll,
                'getOne': getOne.get,
                'update': update.update,
                'remove': remove.delete,
                'login': login.create,
                'logout': logout.create,
            }
        }
    ]);
