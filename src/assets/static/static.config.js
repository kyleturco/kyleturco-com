angular
  .module('kyleTurco')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/pages/landing.html',
      })
      .when('/web', {
        templateUrl: 'assets/pages/web.html',
        controller: 'workCtrl',
        controllerAs: 'work',
      })
      .when('/art', {
        templateUrl: 'assets/pages/illustration.html',
        controller: 'artCtrl',
        controllerAs: 'art',
      })
      .when('/music', {
        templateUrl: 'assets/pages/music.html'
      })
      .when('/contact', {
        templateUrl: 'assets/pages/contact.html'
      })
      .otherwise({
        templateUrl: 'assets/static/404.html'
      });
  })
