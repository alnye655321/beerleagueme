angular.module('Beersportme.controllers.Add_Event', [])

.controller('AddEventController', function($rootScope, $scope, $http, jsonFilter, $window) { //refactored to add factory post submit;
  $scope.children = {};
  $scope.locationID = $rootScope.locationID;
  $scope.sportID = $rootScope.sportID;
  $scope.eventPostCall = function() {
    var eventPayload = {
      date: $scope.eventDate,
      start_time: $scope.startTime,
      end_time: $scope.endTime,
      name: $scope.eventName,
      description: $scope.description,
      locations_id: $scope.children.AllLocations.location,
      sports_id: $scope.children.AllSports.sportID
    };
    $http({
      method: 'POST',
      url: 'http://localhost:3000/events',
      data: eventPayload
    }).
    success(function(data) {
      console.log(data, "Success");
    })
    .error(function(data) {
      console.log(data);
    })
  }
});
