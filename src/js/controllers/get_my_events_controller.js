angular.module('Beersportme.controllers.getMyEvents', [])
.controller("getMyEvents", function ($rootScope, $scope, getFactory, postFactory)
{
  var userID = $rootScope.userID;
  var myDataPromise = getFactory.getData('events/myevents/1');
  myDataPromise.then(function(result) {
   // this is only run after getData() resolves
   $scope.Get_Data = result;
   //console.log("data.name"+$scope.data.name);
  });
});
