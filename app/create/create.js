angular.module('myApp.create', [])

.controller('CreateController', function($scope, Entries) {

  $scope.submitEntry = function() {
    Entries.addOne()
      .then(function(entry) {
        $scope.result = entry.title + ' saved!';
        // $location.path('/');
      })
      .catch(function(err) {
        console.error(err);
      })
  };

});