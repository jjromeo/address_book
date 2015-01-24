'use strict';

addressBookControllers.controller('ContactListCtrl', ['$scope', '$http','$filter', 'Alerter', '$log', 'ContactService',
 function ($scope, $http, $filter, Alerter, $log, ContactService) {
     ContactService.contacts.query(function(contacts){
       $scope.contacts = $filter('orderBy')(contacts, 'first_name')
     });
 }

]);
