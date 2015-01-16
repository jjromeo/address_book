'use strict';

addressBookControllers.controller('ContactDetailCtrl', ['$scope', '$http','$routeParams',
  function($scope, $http, $routeParams){
    $http.get('http://fast-gorge.herokuapp.com/contacts/' + $routeParams.id).success(function(data){
      $scope.contact = data
    })
  }
]);
                                  
