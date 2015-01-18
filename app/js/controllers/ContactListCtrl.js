'use strict';

addressBookControllers.controller('ContactListCtrl', ['$scope', '$http','$filter', 'Alerter',
 function ($scope, $http, $filter, Alerter) {
   $http.get('http://fast-gorge.herokuapp.com/contacts').success(function(data) {
     $scope.contacts = $filter('orderBy')(data, 'first_name');
   });

   $scope.alerts = Alerter.alerts

   $scope.closeAlert = function(index) {
     $scope.alerts.splice(index, 1);
   }

 }

]);
