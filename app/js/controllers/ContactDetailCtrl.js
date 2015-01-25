'use strict';

addressBookControllers.controller('ContactDetailCtrl', [
  '$scope', '$http','$routeParams','$location', 'Alerter', '$log', 'ContactService', 'Restangular',
  function($scope, $http, $routeParams, $location, Alerter, $log, ContactService, Restangular){

    Restangular.one('contacts', $routeParams.id).get().then(function(contact){
      $scope.contact = contact
    })

    $scope.deleteContact = function(contactID) {
      if (confirm('Are you sure you want to delete this contact?')) {
        ContactService.contacts.delete({id: contactID}, function(data){
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

