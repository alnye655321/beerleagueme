angular.module('Beersportme.services.postRoutesCommon', [])
.factory('postFactory', function ($http, jsonFilter) {

    var postData = function(tableName, payload) {
      var callURL = 'http://localhost:3000/' + tableName;
      var jsonData = {};

        // Angular $http() and then() both return promises themselves
        return $http.post(callURL, payload).then(function(status){
           jsonData = status;

            // What we return here is the data that will be accessible
            // to us after the promise resolves
            return status;
        });
    };

    return { postData: postData };
});
