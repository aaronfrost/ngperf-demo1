angular.module('app').controller('MainCtrl', function($scope, $http){

  $scope.taskLists = [[],[],[],[]];

  $http.get('../json/final-tasks.json').then(organizeData);

  function organizeData(data){
    data.data.forEach(function(task, i){
      $scope.taskLists[i%4].push(task);
    });
  }

  var lastMoveTime;
  $scope.onMouseMove = function onMouseMove($event){
    var thisMoveTime = new Date().getTime();
    if(_.isUndefined(lastMoveTime)){
      lastMoveTime = thisMoveTime;
      return;
    }
    console.log("Duration", (thisMoveTime - lastMoveTime));
    lastMoveTime = thisMoveTime;
  };

});