'use strict';

addressBookControllers.controller('ContactDetailCtrl', ['$scope', '$http','$routeParams','$location',
  function($scope, $http, $routeParams, $location){
    $http.get('http://fast-gorge.herokuapp.com/contacts/' + $routeParams.id).success(function(data){
      $scope.contact = data
    })

   $scope.deleteContact = function(contactID) {
     $http.delete('http://fast-gorge.herokuapp.com/contacts/' + contactID).success(function(data){
       $location.path("/contacts");
     })
   }
  }
]);
                                  
