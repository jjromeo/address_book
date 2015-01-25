'use strict';

addressBookControllers.controller('ContactListCtrl', ['$scope', '$http','$filter', 'Alerter', '$log', 'ContactService',
 function($scope, $http, $filter, Alerter, $log, ContactService) {

   ContactService.getContacts().then(function(contacts){
     $scope.contacts = $filter('orderBy')(contacts, 'first_name');
   },function(error) {
     $log.error('contacts could not be loaded due to error ' +  error.status);
     Alerter.addAlert('danger', 'contacts were unable to load');
   });
 }

]);
