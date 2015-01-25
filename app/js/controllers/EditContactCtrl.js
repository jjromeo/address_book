'use strict';

addressBookControllers.controller('EditContactCtrl', [
  '$scope', '$http', '$routeParams', '$location', 'Alerter', '$log', 'ContactService',
  function($scope, $http, $routeParams, $location, Alerter, $log, ContactService){
    var id = $routeParams.id;

    // for pre-filling the form
    ContactService.contacts.get({id: $routeParams.id}, function(data){
      $scope.contact = data;
    },
    function(error) {
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
