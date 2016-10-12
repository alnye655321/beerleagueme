angular.module('Beersportme.controllers.Add_Team', [])

.controller('AddTeamController', function($rootScope, $scope, $http, jsonFilter, $window) { //refactored to add factory post submit;
  $scope.sportID = $rootScope.sportID;
  $scope.teamPostCall = function() {
    var teamPayload = {
      name: $scope.teamName,
      image: $scope.imageUrl,
      gender: $scope.gender,
      coed: $scope.coed,
      zip: $scope.zip,
      sports_id: $scope.children.AllSports.sportID
    };
    $http({
      method: 'POST',
      url: 'http://localhost:3000/teams',
      data: teamPayload
    }).
    success(function(data) {
      console.log(data);
    })
    .error(function(data) {
      console.log(data);
    })
  }
});
