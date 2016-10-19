angular.module('Beersportme.controllers.getAllLadders', [])
.controller("getAllLadders", function($scope, $rootScope, getFactory, postFactory) {

  var allLadderInfo = getFactory.getData('ladders')
  .then(function(result) {
    $scope.Get_Data = result.data.ladders.ladders;
  });

  $scope.updateLadderScope = function(ladderID) {
    $rootScope.ladderID = ladderID;
  };

  $scope.registerClickModal = function(tableName, opponentId, ladderID) {
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
