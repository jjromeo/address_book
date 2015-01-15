'use strict';

var addressBookControllers = angular.module('addressBookControllers', []);

addressBookControllers.controller('ContactListCtrl', ['$scope', '$http',
 function ($scope, $http) {
   $http.get('http://fast-gorge.herokuapp.com/contacts').success(function(data) {
     $scope.contacts = data
   });
 }

]);
