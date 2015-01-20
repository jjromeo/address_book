'use strict';

describe('Address book controllers', function() {
  var Erik = {
              "first_name": "Erik",
              "surname": "Svenson",
              "address": "Sweden",
              "phone_number": "074111222333",
              "email": "Erik@Svenson.com",
              "id": 1741,
              "createdAt": "2014-07-29T21:51:23.000Z",
              "updatedAt": "2014-07-30T21:16:09.000Z"
            };

  describe('ContactListCtrl', function() {
    var ctrl, scope, $httpBackend;
    var urlRegex = new RegExp(/http:\/\/fast-gorge\.herokuapp\.com\/contacts\/(\d{4})/);

    beforeEach(module('addressBookApp'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.whenGET(urlRegex).respond(
        function(method, url) {
        var mockId = url.match(urlRegex)[1];
        return [200, Erik];
      });
      $httpBackend.expectGET().
        respond(Erik);

        scope = $rootScope.$new();
        ctrl = $controller('ContactDetailCtrl', {$scope: scope});
  }));
  
    it ('should be able to get a contacts details from an api', inject(function($controller){
      $httpBackend.flush();
      expect(scope.contact.first_name).toBe("Erik");
    }));
 });
});
