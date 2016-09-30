angular.module('Beersportme.controllers.getAllTeams', [])
.controller("getAllTeams", function ($scope, getFactory)
{
  const teamImages = [
    'https://hd.unsplash.com/photo-1431324003833-a7d76ef5770b',
    'https://hd.unsplash.com/photo-1471265004050-b3e8ff9c162e',
    'https://hd.unsplash.com/photo-1468465226960-8899e992537c',
    'https://hd.unsplash.com/photo-1470083748587-df49227c0505'
    ];

  var myDataPromise = getFactory.getData('teams');
  myDataPromise.then(function(result) {
    console.log(result);
    const teams = result.data.teams;
    const updatedResult = teams.map(function(team) {
      team.newImage = teamImages[Math.floor(Math.random()*teamImages.length)];
      return team
    });

   // this is only run after getData() resolves
   $scope.Get_Data = updatedResult;
   //console.log("data.name"+$scope.data.name);
  });

  $scope.registerClickModal = function(teamID) {
    $scope.modalTeamID = teamID;
  };

});
