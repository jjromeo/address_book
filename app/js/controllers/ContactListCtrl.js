'use strict';

addressBookControllers.controller('ContactListCtrl', ['$scope', '$http','$filter', 'Alerter', '$log', 'ContactService',
 function ($scope, $http, $filter, Alerter, $log, ContactService) {
     $scope.contacts = ContactService.contacts.query();
     $scope.sortedContacts = $filter('orderBy')($scope.contacts, 'first_name')
 }

]);
