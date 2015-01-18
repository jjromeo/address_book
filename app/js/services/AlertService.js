'use strict';

addressBookServices.factory('Alerter',['$timeout', function($timeout){
  return {
    alerts: [],
    addAlert: function(type, message) {
      var myAlerts = this.alerts
      myAlerts.push({type: type, msg: message})
        $timeout(function() {
          myAlerts.splice((-1), 1);
        }, 5000);
    }
  }
}])
