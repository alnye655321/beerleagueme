angular.module('Beersportme.controllers.Home', [])

.controller('HomeController', function($scope, $auth){

   $scope.authenticate = function(provider) {

   $auth.authenticate(provider)
     .then(function(response) {
       //$window.localStorage.currentUser = JSON.stringify(response.data.user);
       $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
       $location.path('/members');
     })
   .catch(function(response) {
     console.log(response);
   });

  };

});
