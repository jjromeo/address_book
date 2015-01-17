'use strict';

addressBookControllers.controller('NewContactCtrl', ['$scope', '$http',
  function($scope, $http){
    $scope.submitContact = function(contact) {
      $http.post("http://fast-gorge.herokuapp.com/contacts", contact)
      $scope.contact = {}
  }
  }

]);
