angular.module('Beersportme.controllers.Profile_Form', [])

.controller('ProfileFormController', function($scope, postFactory) { //refactored to add factory post submit
  $scope.sportArr = [];
  $scope.profilePostCall = function() {
    var profilePayload = {
      first_name: $scope.first_name,
      last_name: $scope.last_name,
      image: $scope.image,
      email: $scope.email_address,
      tagline: $scope.tagline,
      zip_code: $scope.last_name,
      gender: $scope.gender,
      sports: $scope.sportArr,
      availibility: checkAvailability($scope),
      username: 'test',
      password: 'bestpasswordever'
    };
    var myDataPromise = postFactory.postData('players', profilePayload);
    myDataPromise.then(function(result) {

     // this is only run after postData() resolves, result is the status
     //$scope.SuccessPopup = somethin;
     console.log('success!')

    });
  };

  $scope.checkSport = function(sport, el) {
    if (sport === true) {
      $scope.sportArr.push(el);
      $scope.IsHidden = false;
    } else {
      $scope.IsHidden = true;
      var index = $scope.sportArr.indexOf(el)
      if (index >= 0) {
        $scope.sportArr.splice(index, 1);
      }
    }
    return $scope.sportArr;
  }
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
  return parseInt(intArray.join(""));
}
