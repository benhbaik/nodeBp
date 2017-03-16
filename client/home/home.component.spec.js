'use strict';

// describe('home', function() {
//
//     beforeEach(module('home'));
//
//     describe('homeController', function() {
//         var $httpBackend, ctrl;
//         var loginData = {
//             username: 'username',
//             message: 'You are now logged in.',
//             token: '2134@#$FG245kdsf3-324sf32r'
//         };
//
//         beforeEach(inject(function($componentController, _$httpBackend_) {
//             var $httpBackend = _$httpBackend_;
//             var ctrl = $componentController('home');
//
//             $httpBackend.expectPOST('/api/users', {username: 'user', password: 'pass'}).respond(loginData);
//         }));
//
//         it('should return login data after logging in', function() {
//             $httpBackend.flush();
//             expect(sessionStorage.getItem('token')).toBe(loginData.token);
//         });
//     });
// });
