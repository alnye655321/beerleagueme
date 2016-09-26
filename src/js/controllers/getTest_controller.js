angular.module('Beersportme.controllers.getTest', [])
.controller("getTestController", function ($scope, getFactory)
{
  var myDataPromise = getFactory.getData();
  myDataPromise.then(function(result) {

   // this is only run after getData() resolves
   $scope.Get_Data = result;
   //console.log("data.name"+$scope.data.name);
  });

});
