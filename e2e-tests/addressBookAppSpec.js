'use strict';

describe('address book', function() {

  browser.get('index.html');

  describe('contacts page', function() {

    var addAlanRamsey = function(){
      element(by.model('contact.first_name')).sendKeys('Alan');
      element(by.model('contact.surname')).sendKeys('Ramsey');
      element(by.model('contact.address')).sendKeys('123 Restaurant Street');
      element(by.model('contact.phone_number')).sendKeys('079 0873 3864');
      element(by.model('contact.email')).sendKeys('Alan@Ramsey.com');
    };
    var editButton = element.all(by.css('#edit-button'));

    beforeEach(function() {
      browser.get('index.html#/contacts');
    });

    it('should automatically redirect to /contacts when location hash/fragment is empty', function() {
      expect(browser.getLocationAbsUrl()).toMatch("/contacts");
    });

    it('should render all contacts when user navigates to /contacts', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/All Contacts/);
    });

    it ('should allow user to add a contact', function() {
      element.all(by.css('#add-contact')).click();
      addAlanRamsey();
      element(by.css('#submit-contact-button')).click();
      expect(element(by.css('.alert-msg')).getText()).toBe('You have successfully added Alan Ramsey to the address book');
    });

    it('can let you view more details of a contact', function() {
      element.all(by.css('#see-more-Alan')).first().click();
      expect(element.all(by.binding('contact.first_name')).getText()).toEqual([ 'Alan Ramsey' ]);
      expect(element.all(by.binding('contact.address')).getText()).toEqual([ 'Address: 123 Restaurant Street' ]);
    });

    it('will auto-fill inputs when you want to update the details of a contact', function() {
      element.all(by.css('#see-more-Alan')).first().click();
      editButton.click();
      expect(element(by.model('contact.first_name')).getAttribute('value')).toEqual('Alan');
      expect(element(by.model('contact.phone_number')).getAttribute('value')).toEqual('079 0873 3864');
    });

    it('will let you search the contacts', function() {
      element.all(by.model('searchContacts')).sendKeys('Alan');
      expect(element(by.repeater('contact in contacts').row(0)).getText()).toMatch(/Alan/);
    });

    it ('will let you update a contact', function() {
      element.all(by.css('#see-more-Alan')).first().click();
      editButton.click();
      element(by.model('contact.address')).clear().sendKeys('491 fakeman Lane');
      element.all(by.css('#submit-edit-button')).click();
      expect(element(by.css('.alert-msg')).getText()).toBe('Your contact has been updated');
      expect(element.all(by.binding('contact.address')).getText()).toEqual([ 'Address: 491 fakeman Lane' ]);
    });

    it('will let you delete a contact', function(){
      element.all(by.css('#see-more-Alan')).first().click();
      element.all(by.css('#delete-button')).click();
      var alertDialog = browser.switchTo().alert();
      alertDialog.accept();
      expect(element(by.css('.alert-msg')).getText()).toBe('Alan Ramsey was removed from the address book');
    });
  });
});
