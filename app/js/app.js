'use strict';


var addressBookApp = angular.module('addressBookApp', [
  'ngRoute',
  'addressBookControllers'
]);

var addressBookControllers = angular.module('addressBookControllers', []);

addressBookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/contacts/:id', {
      templateUrl: 'views/contact_details.html',
      controller: 'ContactDetailCtrl'
    })
    .otherwise({
      redirectTo: '/contacts',
      templateUrl: 'views/contacts.html',
      controller: 'ContactListCtrl'
    })
}]);
