angular.module('Beersportme.controllers.getAllSports', [])
.controller("getAllSports", function ($scope, getFactory)
{
  var myDataPromise = getFactory.getData('sports');
  myDataPromise.then(function(result) {

   // this is only run after getData() resolves
   $scope.Get_Data = result;
   //console.log("data.name"+$scope.data.name);
  });

});
