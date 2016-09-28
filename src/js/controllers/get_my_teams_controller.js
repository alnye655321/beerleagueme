angular.module('Beersportme.controllers.getMyTeams', [])
.controller("getMyTeams", function ($scope, getFactory)
{
  var userID = $scope.userID;
  var myDataPromise = getFactory.getData('teams/myteams/' + userID);
  myDataPromise.then(function(result) {

   // this is only run after getData() resolves
   $scope.Get_Data = result;
   //console.log("data.name"+$scope.data.name);
  });

});
