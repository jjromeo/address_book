'use strict';

addressBookControllers.controller('ContactListCtrl', ['$scope', '$http','$filter',
 function ($scope, $http, $filter) {
   $http.get('http://fast-gorge.herokuapp.com/contacts').success(function(data) {
     $scope.contacts = $filter('orderBy')(data, 'first_name');
   });
 }

]);
