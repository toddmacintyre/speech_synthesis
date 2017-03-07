// not sure if we have ngRoute yet...

// myApp.services??

angular.module('myApp', [
  'myApp.services',
  'myApp.archive',
  'myApp.create',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/archive', {
      templateUrl: 'app/archive/archive.html',
      controller: 'ArchiveController'
    })
    .when('/create', {
      templateUrl: 'app/create/create.html',
      controller: 'CreateController'
    })
    .otherwise({
      redirectTo: '/archive'
    });
});

// do we need $httpProvider?