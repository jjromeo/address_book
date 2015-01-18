'use strict';


var addressBookApp = angular.module('addressBookApp', [
  'ngRoute',
  'ui.bootstrap',
  'addressBookControllers',
  'addressBookServices'
]);

var addressBookControllers = angular.module('addressBookControllers', []);
var addressBookServices = angular.module('addressBookServices', [])

addressBookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/contacts/:id', {
      templateUrl: 'views/contact_details.html',
      controller: 'ContactDetailCtrl'
    })
    .when('/new', {
      templateUrl: 'views/new_contact.html',
      controller: 'NewContactCtrl'
    })
    .when('/edit/:id', {
      templateUrl: 'views/edit_contact.html',
      controller: 'EditContactCtrl'
    })
    .otherwise({
      redirectTo: '/contacts',
      templateUrl: 'views/contacts.html',
      controller: 'ContactListCtrl'
    })
}]);
