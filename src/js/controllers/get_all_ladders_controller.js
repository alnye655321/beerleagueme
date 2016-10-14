angular.module('Beersportme.controllers.getAllLadders', [])
.controller("getAllLadders", function($scope, getFactory, postFactory) {
  var myDataPromise2 = getFactory.getData('ladders')
  .then(function(result) {
    $scope.Get_Data = result;
  });

  $scope.registerClickModal = function(tableName, opponentId) {
    $scope.modalLadderName = tableName;

    var ladderData = getFactory.getData('ladders/ladder/' + tableName)
    .then(function(result) {
      $scope.Ladder_Data = result;
      $scope.buttons = false;
      $scope.toggleButtons = function(clickIndex) {
        if (clickIndex === $scope.buttons) {
          $scope.buttons = false;
        } else {
          $scope.buttons = clickIndex;
        }
      };
    });
  };

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
