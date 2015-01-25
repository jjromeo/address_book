'use strict';

addressBookControllers.controller('EditContactCtrl', [
  '$scope', '$http', '$routeParams', '$location', 'Alerter', '$log', 'Restangular',
  function($scope, $http, $routeParams, $location, Alerter, $log, Restangular){

    var id = $routeParams.id;

    // for pre-filling the form
    Restangular.one('contacts', id).get().then(function(data){
      $scope.contact = data;
    },
    function(error) {
      $log.error('error in EditContactCtrl');
    });

    $scope.submitEdit = function(contact) {
      Restangular.one('contacts', id).put(contact).then(function(data){
        $location.path("/contacts/" + id );
        Alerter.addAlert('info', 'Your contact has been updated');
      }, function(error){
        $log.error('Put request unsuccessful');
        Alerter.addAlert('danger', 'Your contact has not been updated, please try again later');
      })
    };
  }
]);
