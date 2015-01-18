'use strict';

addressBookControllers.controller('ContactDetailCtrl', [
  '$scope', '$http','$routeParams','$location', 'Alerter',
  function($scope, $http, $routeParams, $location, Alerter){
    $http.get('http://fast-gorge.herokuapp.com/contacts/' + $routeParams.id).success(function(data){
      $scope.contact = data;
    })

    $scope.deleteContact = function(contactID) {
      // Confirms before deleting contact
      bootbox.confirm("Are you sure you want to delete this contact?", function(answer) {
        if (answer === true) {
          $http.delete('http://fast-gorge.herokuapp.com/contacts/' + contactID).success(function(data){
            $location.path("/contacts");
            Alerter.alerts.push({type: 'danger', msg: $scope.contact.first_name + ' ' + $scope.contact.surname + ' was removed from the address book'})
          })
        }
      })
    }
  }
]);

