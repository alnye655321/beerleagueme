angular.module('Beersportme.controllers.Profile_Form', [])

.controller('ProfileFormController', function($scope, $http, jsonFilter) {
  $scope.profilePostCall = function() {
    var profilePayload = {
      first_name: $scope.first_name,
      last_name: $scope.last_name,
      image: $scope.profile_picture,
      email: $scope.email_address,
      tagline: $scope.tagline,
      zip_code: $scope.last_name,
      gender: $scope.gender,
      availibility: checkAvailability($scope),
      username: 'test',
      password: 'bestpasswordever'
    };
    $http.post('http://posttestserver.com/post.php', profilePayload)
    .success(function (data, status)
    {
      console.log(status);
    })
    .error(function (data, status)
    {
      console.log(status);
    });
  };

});

function checkAvailability($scope) {
  var scopeAM = $scope.availabilityAM;
  var scopePM = $scope.availabilityPM;
  var scopeWeekday = $scope.availabilityWeekdays;
  var scopeWeekend = $scope.availabilityWeekends;
  var intArray = [];
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
  console.log(parseInt(intArray.join("")));
  return parseInt(intArray.join(""));
}
