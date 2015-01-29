'use strict';
addressBookDirectives.directive('ngConfirmClick', [function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('click', function() {
        var condition = scope.$eval(attrs.ngConfirmCondition);
        if(condition){
          var message = attrs.ngConfirmMessage;
          if (message && confirm(message)) {
            scope.$apply(attrs.ngConfirmClick);
          }
        }
        else{
          scope.$apply(attrs.ngConfirmClick);
        }
      });
    }
  };
}]);
