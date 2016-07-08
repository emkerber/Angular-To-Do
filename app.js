angular.module('toDo', []);

angular.module('toDo').controller('MainController', function($scope){

    //initialize the array that will hold taskItem(s)
    $scope.array = [];

    //when the button is clicked, add the input to the array
    $scope.handleClick = function() {
      $scope.array.push($scope.taskItem);
    }

    //when the button corresponding (based on index) to a taskItem is clicked,
    //use splice to remove one item at that index
    $scope.removeItem = function(index) {
      $scope.array.splice(index, 1);
      console.log(index);
    }

  })
