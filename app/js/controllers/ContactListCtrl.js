'use strict';

addressBookControllers.controller('ContactListCtrl', ['$scope', '$http','$filter', 'Alerter', '$log', 'Restangular',
 function ($scope, $http, $filter, Alerter, $log, Restangular) {

     Restangular.all('contacts').getList().then(function(contacts){
       $scope.contacts = $filter('orderBy')(contacts, 'first_name');
     });

 }

]);
