angular.module('Beersportme.services.getRoutesCommon', [])
.factory('getFactory', function ($http, jsonFilter) {

    var getData = function(tableName) {
      var callURL = 'http://immense-mountain-80924.herokuapp.com/' + tableName;
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
