angular.module('Beersportme.services.getRoutesCommon', [])
.factory('getFactory', function ($http, jsonFilter) {

    var getData = function(tableName) {
      var callURL = 'http://localhost:3000/' + tableName;
      var jsonData = {};

        // Angular $http() and then() both return promises themselves
        return $http.get(callURL).then(function(data){
           jsonData = data;

            // What we return here is the data that will be accessible
            // to use after the promise resolves
            return jsonData;
        });
    };

    return { getData: getData };
});
