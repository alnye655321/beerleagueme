angular.module('Beersportme.controllers.getAllLadders', [])
.controller("getAllLadders", function ($scope, getFactory, postFactory)
{
  // var myDataPromise = getFactory.getData('ladders');
  // myDataPromise.then(function(result) {
  //
  //  // this is only run after getData() resolves
  //  $scope.Get_Data = result;
  //  //console.log("data.name"+$scope.data.name);
  // });

  var myDataPromise2 = getFactory.getData('ladders'); //!!! this is janky, get rid of big call and do individual ones on modal loads --> /super_table/:id !!!
  myDataPromise2.then(function(result) {

   // this is only run after getData() resolves
   $scope.Get_SuperData = result;
   //console.log("data.name"+$scope.data.name);
  });

  $scope.registerClickModal = function(ladderName) {
    $scope.modalLadderName = ladderName;
  };

  $scope.registerSingleLadder = function(ladderID, tableName, userID) {
    // console.log(userID);
    var payload = {
      player_id: userID,
      ladder_id: ladderID,
      table_name: tableName
    };
    var myDataPromise = postFactory.postData('ladders/register', payload);
    myDataPromise.then(function(result) {

     // this is only run after postData() resolves, result is the status
     //$scope.SuccessPopup = somethin;
     //console.log('succuss!')

    });
  };

});
