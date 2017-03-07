angular.module('services', [])

.factory('Entries', function ($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/API/entries'
    })
    .then(function(resp) {
      console.log(resp);
      return resp.data;
    });
  }
});