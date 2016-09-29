angular.module('Beersportme.controllers.Main', [])

.controller('MainController', function($scope){
  $scope.swiped = function(direction) {
    alert('Swiped ' + direction);
  };
  //$scope.userID = 1;

});
