angular.module('Beersportme.controllers.getAllLocations', [])
.controller("getAllLocations", function ($scope, getFactory)
{
  var myDataPromise = getFactory.getData('events/locations');
  myDataPromise.then(function(result) {
    // var parentScope = $scope.$parent;
    // parentScope.cshildren.AllLocations = $scope
   // this is only run after getData() resolves
   $scope.Get_Data = result;
   //console.log("data.name"+$scope.data.name);
  });

});
