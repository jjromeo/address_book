'use strict'; 

describe('ContactService', function() {
  var $httpBackend, Restangular, q, scope;

  beforeEach(module('addressBookApp'));
  beforeEach(inject(function(_Restangular_, _$httpBackend_, $q, $rootScope){
    $httpBackend = _$httpBackend_;
    Restangular = _Restangular_;
    q = $q
    scope = $rootScope.$new();
  }));

  afterEach(function(){
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  })

  describe('getContact', function(){
    var contact = {
      "first_name": "Jamie",
      "surname": "Smithings",
      "address": "Australia",
      "phone_number": "074111222333",
      "email": "James@Smith.com",
    };
    var mockToReturn = [{
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
      "first_name": "Asia",
      "surname": "India",
      "address": "America",
      "phone_number": "0928492",
      "email": "test@test.com",
      "id": 2061,
      "createdAt": "2015-01-14T18:19:13.000Z",
      "updatedAt": "2015-01-14T18:19:13.000Z"
    }];

    var headers = {"Accept":"application/json, text/plain, */*"}

    it('can get contacts list data', inject(function(ContactService){ 
      spyOn(Restangular, 'all').andCallThrough();
      $httpBackend.expectGET('http://fast-gorge.herokuapp.com/contacts', headers)
      .respond(mockToReturn);
      ContactService.getContacts();
      expect(Restangular.all).toHaveBeenCalledWith('contacts');
    }));

    it('can get a single contact\'s data', inject(function(ContactService){ 
      spyOn(Restangular, 'one').andCallThrough();
      $httpBackend.expectGET('http://fast-gorge.herokuapp.com/contacts/1741', headers)
      .respond(mockToReturn[1]);
      ContactService.fetchContact(1741);
      expect(Restangular.one).toHaveBeenCalledWith('contacts', 1741);
    }));

    it('can delete a contact\'s data', inject(function(ContactService){ 
      spyOn(Restangular, 'one').andCallThrough();
      $httpBackend.expectDELETE('http://fast-gorge.herokuapp.com/contacts/1741', headers)
      .respond(201);
      ContactService.removeContact(1741);
      expect(Restangular.one).toHaveBeenCalledWith('contacts', 1741);
    }));

    it('can edit a contact\'s data', inject(function(ContactService){ 
      spyOn(Restangular, 'one').andCallThrough();
      $httpBackend.expectPUT()
      .respond(201);
      ContactService.editContact(1741, contact);
      expect(Restangular.one).toHaveBeenCalledWith('contacts', 1741);
    }));

    it('can post a new contact\'s data', inject(function(ContactService){ 
      spyOn(Restangular, 'all').andCallThrough();
      $httpBackend.expectPOST('http://fast-gorge.herokuapp.com/contacts', contact)
      .respond(201);
      ContactService.addContact(contact);
      expect(Restangular.all).toHaveBeenCalledWith('contacts');
    }));
  });
});
