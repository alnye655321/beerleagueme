angular.module('Beersportme.controllers.getAllEvents', [])
.controller("getAllEvents", function ($scope, getFactory)
{
  var myDataPromise = getFactory.getData('events');
  myDataPromise.then(function(result) {

   // this is only run after getData() resolves
   $scope.Get_Data = result;
   //console.log("data.name"+$scope.data.name);
  });

});
