angular.module('myApp.create', [])

.controller('CreateController', function($scope, Entries) {

  $scope.submitEntry = function() {
    Entries.addOne({title: $scope.title, body: $scope.text})
      .then(function(entry) {
        $scope.result = entry.data.title + ' saved!';
        // $location.path('/');
      })
      .catch(function(err) {
        console.error(err);
      })
  };

});