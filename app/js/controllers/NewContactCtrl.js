'use strict';

addressBookControllers.controller('NewContactCtrl', ['$scope', '$http', '$location', 'Alerter', '$log',
  function($scope, $http, $location, Alerter, $log){
    $scope.submitContact = function(contact) {
      $http.post(contactsUrl , contact).success(function(response){
        $location.path('/contacts');
        Alerter.addAlert('success', 'You have successfully added ' + contact.first_name + ' ' + contact.surname + ' to the address book');
      }).error(function(){
        Alerter.addAlert('danger', 'Your contact has not been added, please try again');
        $log.error('There has been an error in NewContactCtrl');
      })
    };
  }

]);
