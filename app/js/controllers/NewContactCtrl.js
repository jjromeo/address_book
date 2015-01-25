'use strict';

addressBookControllers.controller('NewContactCtrl', ['$scope', '$http', '$location', 'Alerter', '$log', 'Restangular',
  function($scope, $http, $location, Alerter, $log, Restangular){
    $scope.submitContact = function(contact) {
      Restangular.all('contacts').post(contact).then(function(contact) {
        $location.path('/contacts');
        Alerter.addAlert('success', 'You have successfully added ' + contact.first_name + ' ' + contact.surname + ' to the address book');
      },
      function(error){
        Alerter.addAlert('danger', 'Your contact has not been added, please try again');
        $log.error('There has been an error in NewContactCtrl');
      })
    };
  }

]);
