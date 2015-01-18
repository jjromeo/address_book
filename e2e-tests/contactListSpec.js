'use strict';

describe('address book', function() {

  browser.get('index.html');

  it('should automatically redirect to /contacts when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/contacts");
  });


  describe('contacts page', function() {

    var addGordonRamsey = function(){
      element(by.model('contact.first_name')).sendKeys('Gordon')
      element(by.model('contact.surname')).sendKeys('Ramsey')
      element(by.model('contact.address')).sendKeys('123 Restaurant Street')
      element(by.model('contact.phone_number')).sendKeys('079 0873 3864')
      element(by.model('contact.email')).sendKeys('Gordon@Ramsey.com')
    }
    beforeEach(function() {
      browser.get('index.html#/contacts');
    });


    it('should render all contacts when user navigates to /contacts', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/All Contacts/);
    });

    it ('should allow user to add a contact', function() {
      element.all(by.css('#add-contact')).click()
      addGordonRamsey()
      element(by.css('#submit-contact-button')).click()
      expect(element(by.css('.alert-msg')).getText()).toBe('You have successfully added Gordon Ramsey to the address book')
    });

    it('can let you view more details of a contact', function() {
      element.all(by.css('#see-more-Gordon')).first().click()
      expect(element.all(by.binding('contact.first_name')).getText()).toEqual([ 'Gordon Ramsey' ])
      expect(element.all(by.binding('contact.address')).getText()).toEqual([ 'Address: 123 Restaurant Street' ])
    });

    it('will auto-fill inputs when you want to update the details of a contact', function() {
      element.all(by.css('#see-more-Gordon')).first().click()
      element.all(by.css('#edit-button')).click()
      expect(element(by.model('contact.first_name')).getAttribute('value')).toEqual('Gordon')
      expect(element(by.model('contact.phone_number')).getAttribute('value')).toEqual('079 0873 3864')
    })

    it ('will let you update a contact', function() {
      element.all(by.css('#see-more-Gordon')).first().click()
      element.all(by.css('#edit-button')).click()
      element(by.model('contact.address')).clear().sendKeys('491 Swearing Lane')
      element.all(by.css('#submit-edit-button')).click()
      expect(element(by.css('.alert-msg')).getText()).toBe('Your contact has been updated')
      expect(element.all(by.binding('contact.address')).getText()).toEqual([ 'Address: 491 Swearing Lane' ])
    })

  });


  //describe('view2', function() {

    //beforeEach(function() {
      //browser.get('index.html#/view2');
    //});


    //it('should render view2 when user navigates to /view2', function() {
      //expect(element.all(by.css('[ng-view] p')).first().getText()).
        //toMatch(/partial for view 2/);
    //});

  //});
});
