angular.module('Beersportme.controllers.getLadder', [])
.controller("getLadder", function($http, $scope, getFactory, postFactory, putFactory) {
  $scope.$watch('winner', function (prev, next) {
    console.log(prev, next);
  });
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
  $scope.otherID = false;

  $scope.registerClickModal = function(tableName, sportType, player) {
    $scope.modalLadderName = tableName;
    $scope.opponentID = player.player_id;
    $scope.type = sportType;
    $scope.first = player.first_name;
    $scope.last = player.last_name;
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

  $scope.updateLadder = function(otherID) {

    if (otherID === true) {
      winner = $scope.opponentID;
      loser = $scope.userID;
    }
    else {
      winner = $scope.userID;
      loser = $scope.opponentID;
    }

    $http.put('http://localhost:3000/ladders/ladder/' + $scope.modalLadderName + '/' + winner + '/' + loser)
    .then()
    .catch();
  };

// Need a way to submit and close the modal
// or cancel and close

  // $scope.cancel = function () {
  //   $modalInstance.dismiss('cancel');
  // };
  //
  // $scope.close = function() {
  //   $uibModalInstance.close();
  // };
});
