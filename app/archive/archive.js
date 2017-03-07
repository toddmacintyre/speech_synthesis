angular.module('myApp.archive', [])

.controller('ArchiveController', function($scope, Entries) {
  $scope.getAll = function() {
    services.Entries()
  }
  
  $scope.data = {};

  var initializeEntries = function () {
    Entries.getAll()
      .then(function (entries) {
        $scope.data.entries = entries;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializeEntries();
});