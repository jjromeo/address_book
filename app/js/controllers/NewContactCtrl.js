'use strict';

addressBookControllers.controller('NewContactCtrl', ['$scope', '$http', '$location', 'Alerter',
  function($scope, $http, $location, Alerter){
    $scope.submitContact = function(contact) {
      $http.post("http://fast-gorge.herokuapp.com/contacts", contact).success(function(response){
        $location.path('#/contacts')
        Alerter.alerts.push({type: 'success', msg: 'You have successfully added ' + contact.first_name + ' ' + contact.surname + ' to the address book'})
      });
    }
  }

]);
