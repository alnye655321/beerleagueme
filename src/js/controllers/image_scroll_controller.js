angular.module('Beersportme.controllers.teamImagesArray', [])
.controller('teamImageArray', function ($scope)
{
  const teamImages = [
    'https://hd.unsplash.com/photo-1431324003833-a7d76ef5770b',
    'https://hd.unsplash.com/photo-1471265004050-b3e8ff9c162e',
    'https://hd.unsplash.com/photo-1468465226960-8899e992537c',
    'https://hd.unsplash.com/photo-1470083748587-df49227c0505'
    ];

  $scope.getRandomImage = function() {
    return teamImages[Math.floor(Math.random()*teamImages.length)];
  }

});
