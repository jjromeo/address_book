'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('address book', function() {

  browser.get('index.html');

  it('should automatically redirect to /contacts when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/contacts");
  });


  describe('contacts page', function() {

    beforeEach(function() {
      browser.get('index.html#/contacts');
    });


    it('should render all contacts when user navigates to /contacts', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/All Contacts/);
    });

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
