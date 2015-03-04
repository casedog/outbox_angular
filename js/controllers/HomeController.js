app.controller('HomeController', ['$scope', 'email', function($scope, email) {
  email.success(function(data) { 
    $scope.emails = data; 
  });
}]);