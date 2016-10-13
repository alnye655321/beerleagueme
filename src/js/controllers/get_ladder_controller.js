angular.module('Beersportme.controllers.getLadder', [])
.controller("getLadder", function($scope, getFactory, postFactory) {
  var myDataPromise2 = getFactory.getData('ladders/1')
  .then(function(result) {
    $scope.ladderInfo = result.data.ladder;
    var tableName = result.data.ladder.table_name;

    var ladderData = getFactory.getData('ladders/ladder/' + tableName)
    .then(function(result) {
      $scope.Ladder_Data = result.data.ladder;
      $scope.buttons = false;
      $scope.toggleButtons = function(clickIndex) {
        if (clickIndex === $scope.buttons) {
          $scope.buttons = false;
        } else {
          $scope.buttons = clickIndex;
        }
      };
    });
  });
  
  $scope.registerSingleLadder = function(ladderID, tableName, userID) {
    var payload = {
      player_id: userID,
      ladder_id: ladderID,
      table_name: tableName
    };
    var myDataPromise = postFactory.postData('ladders/register', payload)
    .then(function(result) {

    });
  };

});
