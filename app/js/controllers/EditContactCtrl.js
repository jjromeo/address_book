'use strict';

addressBookControllers.controller('EditContactCtrl', [
  '$scope', '$http', '$routeParams', '$location', 'Alerter', '$log',
  function($scope, $http, $routeParams, $location, Alerter, $log){
    var id = $routeParams.id;

    // for pre-filling the form
    $http.get(contactsUrl + id).success(function(data){
      $scope.contact = data;
    }).error(function(){
      $log.error('error in EditContactCtrl');
    });

    $scope.submitEdit = function(contact) {
      $http.put(contactsUrl + id, contact).success(function(data){
        $location.path("/contacts/" + id );
        Alerter.addAlert('info', 'Your contact has been updated');
      }).error(function(){
        $log.error('Put request unsuccessful');
        Alerter.addAlert('danger', 'Your contact has not been updated, please try again later');
      })
    };
  }
]);
