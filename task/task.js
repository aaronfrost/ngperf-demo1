angular.module('app').directive('task', function() {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: '../../task/task.html',
    scope:{
      task: '='
    },
    link: function(scope, elem, attrs) {

    }
  };
});