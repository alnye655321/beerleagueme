angular.module('Beersportme.controllers.getProfile', [])
.controller("getProfile", function ($scope, getFactory)
{
  var userID = $scope.userID;
  var myDataPromise = getFactory.getData('players/' + 1);
  myDataPromise.then(function(result) {

   // this is only run after getData() resolves
   $scope.Get_Data = result;
   //console.log("data.name"+$scope.data.name);
  });

});


function checkAvailability(result) {
  var availabilityAM = result.player.player[0].availability.substring(0, 0);
  var availabilityPM = result.player.player[0].availability.substring(0, 1);
  if(scopeAM == 1 && scopePM ==2){
    intArray.push(3);
  } else if (scopeAM == 1) {
    intArray.push(1);
  } else if (scopePM == 2) {
    int.Array.push(2);
  }
  if (scopeWeekday == 4 && scopeWeekend == 5) {
    intArray.push(6);
  } else if (scopeWeekday == 4) {
    intArray.push(4);
  } else if(scopeWeekend == 5){
    intArray.push(5);
  }
  return parseInt(intArray.join(""));
}
