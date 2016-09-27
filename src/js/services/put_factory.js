angular.module('Beersportme.services.putRoutesCommon', [])
.factory('putFactory', function ($http, jsonFilter) {

    var putData = function(tableName, id, payload) {
      var callURL = 'http://immense-mountain-80924.herokuapp.com/' + tableName + '/' + id;
      var jsonData = {};

        // Angular $http() and then() both return promises themselves
        return $http.put(callURL, payload).then(function(status){
           jsonData = status;

            // What we return here is the data that will be accessible
            // to us after the promise resolves
            return status;
        })
        .catch(function(error){
          console.log(error);
        });
    };

    return { putData: putData };
});
