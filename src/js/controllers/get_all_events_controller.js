angular.module('Beersportme.controllers.getAllEvents', [])
.controller("getAllEvents", function ($scope, getFactory, postFactory)
{
  var myDataPromise = getFactory.getData('events');
  myDataPromise.then(function(result) {

   // this is only run after getData() resolves
   $scope.Get_Data = result;
   //console.log("data.name"+$scope.data.name);
  });

  $scope.registerSingleEvent = function(eventID, userID) {
    console.log(userID);
    var payload = {
      player_id: userID,
      event_id: eventID
    };
    var myDataPromise = postFactory.postData('events/register', payload);
    myDataPromise.then(function(result) {

     // this is only run after postData() resolves, result is the status
     //$scope.SuccessPopup = somethin;
     console.log('succuss!')

    });
  };

});
