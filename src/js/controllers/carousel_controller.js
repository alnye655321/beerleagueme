angular.module('Beersportme.controllers.carousel', [])
.controller("carouselController", function ($scope, getFactory)
{
  var myDataPromise = getFactory.getData('events');
  myDataPromise.then(function(result) {

   // this is only run after getData() resolves
   $scope.Get_Data = result;
   //console.log("data.name"+$scope.data.name);
  });

  $scope.registerClickModal = function(eventID) {
    //$scope.modalEventID = eventID;
    var getEventData = $scope.Get_Data;
    var array = getEventData.data.events.events;
    var new_array = array.filter(function(val){
      return val.locations_id == eventID;
    });
    $scope.eventList = new_array;
    console.log(new_array);
  };

});
