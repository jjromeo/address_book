'use strict';

addressBookControllers.controller('NewContactCtrl', ['$scope', '$http', '$location', 'Alerter', 
  function($scope, $http, $location, Alerter){
    $scope.submitContact = function(contact) {
      $http.post(contactsUrl , contact).success(function(response){
        $location.path('/contacts');
        Alerter.addAlert('success', 'You have successfully added ' + contact.first_name + ' ' + contact.surname + ' to the address book');
      }).error(function(){
        Alerter.addAlert('danger', 'Your contact has not been added, please try again');
        console.log('There has been an error in NewContactCtrl');
      })
    };
  }

]);
