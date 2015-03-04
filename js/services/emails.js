app.factory('email', ['$http', function($http) {
    return $http.get('//s3.amazonaws.com/codecademy-content/courses/ltp4/emails-api/emails.json')
        .success(function(data) { 
            return data; 
        }) 
        .error(function(err) { 
            return err; 
        });
}]);