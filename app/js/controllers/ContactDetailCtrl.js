'use strict';

addressBookControllers.controller('ContactDetailCtrl', [
  '$scope', '$http','$routeParams','$location', 'Alerter', '$log',
  function($scope, $http, $routeParams, $location, Alerter, $log){
    $http.get(contactsUrl + $routeParams.id).success(function(data){
      $scope.contact = data;
    });

    $scope.deleteContact = function(contactID) {
      if (confirm('Are you sure you want to delete this contact?')) {
        $http.delete(contactsUrl + contactID).success(function(data){
          $location.path("/contacts");
          Alerter.addAlert('danger', $scope.contact.first_name + ' ' + $scope.contact.surname + ' was removed from the address book');
        }).error(function(){
          Alerter.addAlert('info', 'There was an error deleting the contact, please try again');
          $log.error('delete request unsuccessful')
        })
      }
    };
  }
]);

