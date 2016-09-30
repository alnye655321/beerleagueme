angular.module('Beersportme.controllers.getAllTeams', [])
.controller("getAllTeams", function ($scope, getFactory)
{
  var myDataPromise = getFactory.getData('teams');
  myDataPromise.then(function(result) {

   // this is only run after getData() resolves
   $scope.Get_Data = result;
   //console.log("data.name"+$scope.data.name);
  });

  $scope.registerClickModal = function(teamID) {
    $scope.modalTeamID = teamID;
  };

});
