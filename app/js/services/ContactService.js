'use strict';

addressBookServices.factory('ContactService', function(Restangular){
  return {
    getContacts: function(){
      return Restangular.all('contacts').getList();
    },
    fetchContact: function(id) {
      return Restangular.one('contacts', id).get();
    },
    removeContact: function(id) {
      return Restangular.one('contacts', id).remove();
    },
    editContact: function(id, contact) {
      return Restangular.one('contacts', id).put(contact);
    },
    addContact: function(contact) {
      return Restangular.all('contacts').post(contact);
    }
  }
});
