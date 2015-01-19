'use strict';

addressBookServices.service('myTimeout', function($rootScope) {
  return function(fn, delay) {
    return setTimeout(function() {
      fn();
      $rootScope.$apply();
    }, 3000);
  };
});
