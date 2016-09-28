angular.module('Beersportme.controllers.getMyEvents', [])
.controller("getMyEvents", function ($scope, getFactory, postFactory)
{
  var userID = $scope.userID;
  var myDataPromise = getFactory.getData('myevents/' + userID);
  myDataPromise.then(function(result) {

   // this is only run after getData() resolves
   $scope.Get_Data = result;
   //console.log("data.name"+$scope.data.name);
  });
});
