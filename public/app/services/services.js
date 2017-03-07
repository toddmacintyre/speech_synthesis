angular.module('myApp.services', [])

.factory('Entries', function ($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/API/entries'
    })
    .then(function(resp) {
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

  var deleteOne = function(id) {
    return $http({
      method: 'DELETE',
      url: '/api/entries/' + id,
    });
  }

  return {
    getAll: getAll,
    addOne: addOne,
    deleteOne: deleteOne
  };
});
