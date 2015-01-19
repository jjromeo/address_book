'use strict';

addressBookControllers.controller('AlertCtrl', [
  '$scope', 'Alerter',
  function($scope, Alerter) {
    $scope.alerts = Alerter.alerts;

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
  }
]);

