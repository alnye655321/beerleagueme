angular.module('Beersportme.controllers.getAllSports', [])
.controller("getAllSports", function ($scope, getFactory)
{

const teamImages = [
  'https://hd.unsplash.com/photo-1431324003833-a7d76ef5770b',
  'https://hd.unsplash.com/photo-1471265004050-b3e8ff9c162e',
  'https://hd.unsplash.com/photo-1468465226960-8899e992537c',
  'https://hd.unsplash.com/photo-1470083748587-df49227c0505'
  ];

  var myDataPromise = getFactory.getData('sports');
  myDataPromise.then(function(result) {
    var parentScope = $scope.$parent;
    parentScope.children = {};
    parentScope.children.AllSports = $scope;

    const sports = result.data.sports;
    const updatedResult = sports.map(function(sport) {
      sport.newImage = teamImages[Math.floor(Math.random()*teamImages.length)];
      return sports
    });

    //  this is only run after getData() resolves
     $scope.Get_Data = result;
     //console.log("data.name"+$scope.data.name);
  });

});
