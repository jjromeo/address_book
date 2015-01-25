'use strict';

var AddressBookPage = function() {
  this.first_name = element(by.model('contact.first_name'));
  this.editButton = element.all(by.css('#edit-button'));
}

module.exports = new AddressBookPage();
