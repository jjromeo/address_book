'use strict';

describe('Address book controllers', function() {

  var newContact= {
    "first_name": "James",
    "surname": "Smith",
    "address": "Australia",
    "phone_number": "074111222333",
    "email": "James@Smith.com",
  };

  describe('NewContactCtrl', function() {
    var ctrl, scope, $httpBackend;

    beforeEach(module('addressBookApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      ctrl = $controller('NewContactCtrl', {$scope: scope});
    }));

    it ('should be able to post a contacts data to the api', inject(function($controller){
      $httpBackend.expectPOST('http://fast-gorge.herokuapp.com/contacts/', newContact).respond(201, '');
      scope.submitContact(newContact);
      $httpBackend.verifyNoOutstandingRequest();
      $httpBackend.verifyNoOutstandingExpectation();
    }));

  });
});
