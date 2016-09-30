angular.module('Beersportme.controllers.getMyEvents', [])
.controller("getMyEvents", function ($rootScope, $scope, getFactory, postFactory)
{
  var userID = $rootScope.userID;
  var myDataPromise = getFactory.getData('events/myevents/1');
  myDataPromise.then(function(result) {
   // this is only run after getData() resolves Get_Data.data.events  --> result.data.events
   var resultResponse = result;
   for (var i = 0; i < resultResponse.data.events.length; i++) {
     resultResponse.data.events[i].id = i;
   }
   $scope.Get_Data = resultResponse;
   //console.log("data.name"+$scope.data.name);
  });

  $scope.registerClickModal = function(eventName) {
    $scope.modalEventName = eventName;
  };

  var myDataPromise2 = getFactory.getData('events/super_table'); //!!! this is janky, get rid of big call and do individual ones on modal loads --> /super_table/:id !!!
  myDataPromise2.then(function(result) {

   // this is only run after getData() resolves
   $scope.Get_SuperData = result;
   //console.log("data.name"+$scope.data.name);
  });

});
