'use strict';

angular.module('kyleTurco').config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'assets/pages/landing.html'
  }). // controller: 'ButtonController',
  // controllerAs: 'button'
  when('/web', {
    templateUrl: 'assets/pages/web.html'
  }).when('/art', {
    templateUrl: 'assets/pages/illustration.html'
  }).when('/music', {
    templateUrl: 'assets/pages/music.html'
  }).when('/contact', {
    templateUrl: 'assets/pages/contact.html'
  }).otherwise({
    templateUrl: 'assets/static/404.html'
  });
});