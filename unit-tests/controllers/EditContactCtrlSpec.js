'use strict';

describe('Address book controllers', function() {

  var editedContact = {
    "first_name": "Jamie",
    "surname": "Smithings",
    "address": "Australia",
    "phone_number": "074111222333",
    "email": "James@Smith.com",
  };

  var newContact = {
    "first_name": "James",
    "surname": "Smith",
    "address": "Australia",
    "phone_number": "074111222333",
    "email": "James@Smith.com",
  };

  describe('EditContactCtrl', function() {
    var ctrl, scope, $httpBackend;
    var urlRegex = new RegExp(/http:\/\/fast-gorge\.herokuapp\.com\/contacts\/(\d{4})/);

    beforeEach(module('addressBookApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.whenGET(urlRegex).respond(
        function(method, url) {
        var mockId = url.match(urlRegex)[1];
        return [200, newContact];
      });
      scope = $rootScope.$new();
      ctrl = $controller('EditContactCtrl', {$scope: scope});
    }));

    it ('should be able to post a contacts data to the api', inject(function($controller){
      $httpBackend.expectGET().respond(newContact);
      $httpBackend.expectPUT().respond(201, editedContact);
      scope.submitEdit(newContact);
      $httpBackend.flush();
      $httpBackend.verifyNoOutstandingRequest();
      $httpBackend.verifyNoOutstandingExpectation();
    }));

  });
});
