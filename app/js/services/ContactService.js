'use strict';

addressBookServices.factory('ContactService', function($resource){
  return {
    contacts: $resource(contactsUrl, {}, { query: {method: 'GET', isArray: true} }),
  }
});
