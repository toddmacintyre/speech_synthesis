angular.module('myApp.services', [])

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

  var addOne = function (entry) {
    return $http({
      method: 'POST',
      url: '/api/entries',
      data: entry
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
});
