'use strict';

addressBookServices.factory('Alerter',['myTimeout', function(myTimeout){
  return {
    alerts: [],
    addAlert: function(type, message) {
      var myAlerts = this.alerts;
      myAlerts.push({type: type, msg: message});
      myTimeout(function() {
        myAlerts.splice((-1), 1);
      }, 5000);
    }
  }
}])
