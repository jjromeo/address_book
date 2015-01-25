'use strict';

addressBookControllers.controller('ContactDetailCtrl', [
  '$scope', '$http','$routeParams','$location', 'Alerter', '$log', 'Restangular',
  function($scope, $http, $routeParams, $location, Alerter, $log, Restangular){

    Restangular.one('contacts', $routeParams.id).get().then(function(contact){
      $scope.contact = contact
    }, function(error){
      $log.error("Error with status code " + error.status);
      Alerter.addAlert('danger', 'There was an error in loading the contact, please try again later')
  })

    $scope.deleteContact = function(contactID) {
      if (confirm('Are you sure you want to delete this contact?')) {
        Restangular.one('contacts', contactID).remove().then(function(contact){
          $location.path("/contacts");
          Alerter.addAlert('danger', $scope.contact.first_name + ' ' + $scope.contact.surname + ' was removed from the address book');
        }, function(error){
          Alerter.addAlert('info', 'There was an error deleting the contact, please try again');
          $log.error('delete request unsuccessful')
        })
      }
    };
  }
]);

