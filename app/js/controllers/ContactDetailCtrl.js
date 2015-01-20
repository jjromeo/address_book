'use strict';

addressBookControllers.controller('ContactDetailCtrl', [
  '$scope', '$http','$routeParams','$location', 'Alerter',
  function($scope, $http, $routeParams, $location, Alerter){
    $http.get('http://fast-gorge.herokuapp.com/contacts/' + $routeParams.id).success(function(data){
      $scope.contact = data;
    });

   $scope.deleteContact = function(contactID) {
     // Confirms before deleting contact
     //COMMENTED OUT BOOTBOX MODAL DUE TO INABILITY TO TEST
     //bootbox.confirm("Are you sure you want to delete this contact?", function(answer) {
       //if (answer === true) {
         //$http.delete('http://fast-gorge.herokuapp.com/contacts/' + contactID).success(function(data){
           //$location.path("/contacts");
           //Alerter.alerts.push({type: 'danger', msg: $scope.contact.first_name + ' ' + $scope.contact.surname + ' was removed from the address book'})
         //})
       //}
     //})
     
     // Put in a less exciting confirm button that I could test
     if (confirm('Are you sure you want to delete this contact?')) {
       $http.delete('http://fast-gorge.herokuapp.com/contacts/' + contactID).success(function(data){
         $location.path("/contacts");
         Alerter.addAlert('danger', $scope.contact.first_name + ' ' + $scope.contact.surname + ' was removed from the address book');
       }).error(function(){
         Alerter.addAlert('info', 'There was an error deleting the contact, please try again');
         console.log('delete request unsuccessful')
       })
     }
   };
  }
]);

