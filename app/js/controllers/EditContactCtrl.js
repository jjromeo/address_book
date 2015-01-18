'use strict';

addressBookControllers.controller('EditContactCtrl', [
  '$scope', '$http', '$routeParams', '$location', 'Alerter',
  function($scope, $http, $routeParams, $location, Alerter){
    var id = $routeParams.id

    // for pre-filling the form
    $http.get('http://fast-gorge.herokuapp.com/contacts/' + id).success(function(data){
      $scope.contact = data;
    })

    $scope.submitEdit = function(contact) {
      $http.put("http://fast-gorge.herokuapp.com/contacts/" + id, contact).success(function(data){
        $location.path("/contacts/" + id );
        Alerter.addAlert('info', 'Your contact has been updated')
      })
    }
  }

]);
