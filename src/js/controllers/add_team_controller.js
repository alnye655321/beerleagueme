angular.module('Beersportme.controllers.Add_Event', [])

.controller('AddEventController', function($rootScope, $scope, $http, jsonFilter, $window) { //refactored to add factory post submit;
  $scope.children = {};
  $scope.eventPostCall = function() {
    var eventPayload = {
      name: $scope.eventDate,
      image: $scope.startTime,
      gender: $scope.endTime,
      coed: $scope.eventName,
      zip: $scope.zip
    };
    console.log(eventPayload);
    $http({
      method: 'POST',
      url: 'http://immense-mountain-80924.herokuapp.com/teams',
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
