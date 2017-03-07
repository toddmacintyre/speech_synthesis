// not sure if we have ngRoute yet...

// myApp.services??

angular.module('myApp', [
  'services',
  'archive',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'archive/archive.html',
      controller: 'ArchiveController'
    })
    .when('/create', {
      templateUrl: 'create/create.html',
      controller: 'CreateController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

// do we need $httpProvider?