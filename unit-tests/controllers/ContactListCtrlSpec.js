'use strict';

describe('Address book controllers', function() {
  var someContacts = [{
    "first_name": "Erik",
    "surname": "Svenson",
    "address": "Sweden",
    "phone_number": "074111222333",
    "email": "Erik@Svenson.com",
    "id": 1741,
    "createdAt": "2014-07-29T21:51:23.000Z",
    "updatedAt": "2014-07-30T21:16:09.000Z"
  },
  {
    "first_name": "Freddie",
    "surname": "Mercury",
    "address": "Queensland",
    "phone_number": "07492920101",
    "email": "Freddie@Queen.com",
    "id": 1791,
    "createdAt": "2014-07-31T07:49:23.000Z",
    "updatedAt": "2014-07-31T07:49:23.000Z"
  },
  {
    "first_name": "Asia",
    "surname": "India",
    "address": "America",
    "phone_number": "0928492",
    "email": "test@test.com",
    "id": 2061,
    "createdAt": "2015-01-14T18:19:13.000Z",
    "updatedAt": "2015-01-14T18:19:13.000Z"
  }];

  describe('ContactListCtrl', function() {
    var ctrl, scope, $httpBackend;

    beforeEach(module('addressBookApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://fast-gorge.herokuapp.com/contacts').
      respond(someContacts);
      scope = $rootScope.$new();
      ctrl = $controller('ContactListCtrl', {$scope: scope});
    }));

    it ('should create an address model with all items from the api', inject(function($controller){
      $httpBackend.flush();
      expect(scope.contacts.length).toBe(3);
    }));

    it ('should order the contacts by their first name', inject(function($controller){
      $httpBackend.flush();
      expect(scope.contacts[0].first_name).toBe('Asia');
      expect(scope.contacts[1].first_name).toBe('Erik');
    }));

  });
});
