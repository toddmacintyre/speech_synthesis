angular.module('myApp.archive', [])

.controller('ArchiveController', function($scope, Entries) {
  
  $scope.data = {};


  var initializeEntries = function() {
    Entries.getAll()
      .then(function(entries) {
        $scope.data.entries = entries;
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  initializeEntries();

  $scope.deleteEntry = function(id) {
    console.log(id);
    Entries.deleteOne(id)
      .then(function() {
        initializeEntries();
      });
  };

  $scope.playEntry = function(text) {
    
    var utterThis = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterThis);
  }

});