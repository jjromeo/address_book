'use strict';


var addressBookApp = angular.module('addressBookApp', [
  'ngRoute',
  'ui.bootstrap',
  'addressBookControllers',
  'addressBookServices',
  'angularUtils.directives.dirPagination',
  'ngResource'
]);

var contactsUrl = 'http://fast-gorge.herokuapp.com/contacts/:id'
var addressBookControllers = angular.module('addressBookControllers', []);
var addressBookServices = angular.module('addressBookServices', []);

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
    });
}]);

addressBookApp.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('bower_components/angulular-utils-pagination/dirPagination.tpl.html');
});
