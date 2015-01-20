'use strict';

addressBookControllers.controller('ContactListCtrl', ['$scope', '$http','$filter', 'Alerter',
 function ($scope, $http, $filter, Alerter) {
   $http.get('http://fast-gorge.herokuapp.com/contacts').success(function(data) {
     $scope.contacts = $filter('orderBy')(data, 'first_name');
   }).error(function(){
     console.log('get request to /contacts unsuccessful')
     Alerter.addAlert('danger', 'Error getting contacts from server, please refresh or try again later')
   })
 }

]);
