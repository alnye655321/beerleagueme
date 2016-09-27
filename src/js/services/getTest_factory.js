// angular.module('Beersportme.services.getTest', [])
// .factory('getFactory', function ($http, jsonFilter) {
//
//   var logResult = function (str, data, status, headers, config) {
//     return str + "\n\n" +
//       "data: " + data + "\n\n" +
//       "status: " + status + "\n\n" +
//       "headers: " + jsonFilter(headers()) + "\n\n" +
//       "config: " + jsonFilter(config);
//   };
//
//     var jsonData = {};
//     var callURL = "http://node.nyedigital.com/api/v1/authors";
//
//     $http.get(callURL)
//       .success(function (data, status, headers, config)
//       {
//         jsonData = data;
//         //$scope.simpleGetCallResult = logResult("GET SUCCESS", data, status, headers, config);
//       })
//       .error(function (data, status, headers, config)
//       {
//         //$scope.simpleGetCallResult = logResult("GET ERROR", data, status, headers, config);
//       });
//
//       var factory = {};
//       //could be multiple function objects here, or regular key/val objects
//       factory.getTestRequest = function () {
//         return jsonData;
//       }
//       return factory;
//
//
// });


angular.module('Beersportme.services.getTest', [])
.factory('getFactoryX', function ($http, jsonFilter) {
  var callURL = "http://node.nyedigital.com/api/v1/authors";
    var getData = function() {
      var jsonData = {};

        // Angular $http() and then() both return promises themselves
        return $http.get(callURL).then(function(data){
           jsonData = data;

            // What we return here is the data that will be accessible
            // to us after the promise resolves
            return jsonData;
        });
    };


    return { getData: getData };
});


// function myFunction($scope, myService) {
//     var myDataPromise = myService.getData();
//     myDataPromise.then(function(result) {
//
//        // this is only run after getData() resolves
//        $scope.data = result;
//        console.log("data.name"+$scope.data.name);
//     });
// }
