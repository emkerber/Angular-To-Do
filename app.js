angular.module('toDo', []);

angular.module('toDo').controller('MainController', function($scope){

    $scope.array = [];

    $scope.handleClick = function() {
      $scope.array.push($scope.taskItem);
    }

    $scope.removeItem = function(index) {
      $scope.array.splice(index, 1);
      console.log(index);
    }

  })
