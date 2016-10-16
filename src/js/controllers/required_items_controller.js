angular.module('Beersportme.controllers.required_items', [])

.controller('requiredItems', function($rootScope, $scope, putFactory) {

  $scope.requiredItems = [];

  for (var i = 0; i < 10; i++) {
    $scope.requiredItems.push({icon: 'envelope', message: 'Notice ' + (i + 1)});
  }

  $scope.dismissItem = function(item) {
    var index = $scope.requiredItems.indexOf(item);
    if (index > -1) {
      $scope.requiredItems.splice(index, 1);
    }

    var payload = {
      item: item
    };
    var myDataPromise = putFactory.putData('required_items', $rootScope.userID, payload); //set complete = TRUE where item = 'item' on a required items for players join or table?? Perhaps someone joins an event and automatically a bunch of required items are added to a table
    myDataPromise.then(function(result) {

     // this is only run after putData() resolves, result is the status
     //$scope.SuccessPopup = somethin;
     console.log('succuss!')

    });
console.log('running');

  };
});
