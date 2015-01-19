'use strict';

describe('Address book services', function() {

  describe('Alerter', function() {

    beforeEach(module('addressBookApp'));
    beforeEach(function(){
      var timeOut = function(fn, delay) {
                    return setTimeout(function() {
                      fn();
                      $rootScope.$apply();
                    }, 3000);
  };
      module(function($provide){
        $provide.value('myTimeout', timeOut);
      });

      inject(function($injector){
        this.alerter = $injector.get('Alerter');
      });
    });

  
    it ('should have an empty alerts array', inject(function(){
      expect(this.alerter.alerts.length).toBe(0)
    }));

    it ('should allow alerts to be added into it', inject(function(){
      expect(this.alerter.alerts.length).toBe(0)
      this.alerter.addAlert('danger', 'Something dangerous happened')
      expect(this.alerter.alerts.length).toBe(1)
    }));

 })
});
