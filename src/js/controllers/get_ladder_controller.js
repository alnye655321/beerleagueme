var app = angular.module('Beersportme.controllers.getLadder', []);

app.controller("getLadder", ladderController);

function ladderController($http, $scope, $rootScope, getFactory, postFactory) {
  var vm = $scope;

  var ladderInfo = getFactory.getData('ladders/' + $rootScope.ladderID)
  .then(function(result) {
    vm.ladderInfo = result.data.ladder;
    var tableName = result.data.ladder.table_name;

    var ladderData = getFactory.getData('ladders/ladder/' + tableName)
    .then(function(result) {
      vm.registered = result.data.ladder.length;
      vm.Ladder_Data = result.data.ladder;
      vm.present =
        result.data.ladder.filter(function(player) {
          if (player.player_id === vm.userID) {
            return player;
          }
        });
      vm.buttons = false;
      vm.toggleButtons = function(clickIndex) {
        vm.playerRank = result.data.ladder[clickIndex].rank;
        vm.challengeOK = vm.playerRank-vm.present[0].rank;

        if (clickIndex === vm.buttons) {
          vm.buttons = false;
        } else {
          vm.buttons = clickIndex;
        }
      };
    });
  });

  vm.winnerID = false;

  vm.registerClickModal = function(tableName, sportType, player) {
    vm.modalLadderName = tableName;
    vm.opponentID = player.player_id;
    vm.type = sportType;
    vm.first = player.first_name;
    vm.last = player.last_name;
  };

  vm.registerSingleLadder = function(ladderID, tableName, userID) {
    var payload = {
      player_id: userID,
      ladder_id: ladderID,
      table_name: tableName
    };
    var myDataPromise = postFactory.postData('ladders/register', payload)
    .then(function(result) {
      var ladderData = getFactory.getData('ladders/ladder/' + tableName)
      .then(function(result) {
        vm.registered = result.data.ladder.length;
        vm.Ladder_Data = result.data.ladder;
        vm.present =
          result.data.ladder.filter(function(player) {
            if (player.player_id === vm.userID) {
              return player;
            }
          });
        vm.buttons = false;
        vm.toggleButtons = function(clickIndex) {
          vm.playerRank = result.data.ladder[clickIndex].rank;
          vm.challengeOK = Math.abs(vm.playerRank-vm.present[0].rank);

          if (clickIndex === vm.buttons) {
            vm.buttons = false;
          } else {
            vm.buttons = clickIndex;
          }
        };
      });
    });
  };

  vm.updateLadder = function(winnerID) {

    if (winnerID == vm.opponentID) {
      winner = vm.opponentID;
      loser = vm.userID;
    }
    else {
      winner = vm.userID;
      loser = vm.opponentID;
    }

    $http.put('http://localhost:3000/ladders/ladder/' + vm.modalLadderName + '/' + winner + '/' + loser)
    .then()
    .catch();
  };

// Need a way to submit and close the modal
// or cancel and close

  // vm.cancel = function () {
  //   $modalInstance.dismiss('cancel');
  // };
  //
  // vm.close = function() {
  //   $uibModalInstance.close();
  // };
}
