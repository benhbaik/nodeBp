'use strict';

describe('User', function() {
    var $httpBackend;
    var User;
    var userList = [
        {username: 'user', id: 12345},
        {username: 'username', id: 54321},
        {username: 'other', id: 98765}
    ];

    beforeEach(module('core.user'));

    beforeEach(inject(function(_$httpBackend_, _User_) {
        $httpBackend = _$httpBackend_;
        User = _User_;

        $httpBackend.expectGET('/api/users').respond(userList);
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch user data from GET request', function() {
        var users = User.get();

        $httpBackend.flush();

        expect(users[0].username).toEqual(userList[0].username);
        expect(users[1].username).toEqual(userList[1].username);
        expect(users[2].username).toEqual(userList[2].username);

        expect(users[0].id).toEqual(userList[0].id);
        expect(users[1].id).toEqual(userList[1].id);
        expect(users[2].id).toEqual(userList[2].id);
    });
});
