'use strict';

angular.module('kyleTurco').config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'assets/pages/landing.html'
  }).when('/about', {
    templateUrl: 'assets/pages/about.html'
  }).when('/work', {
    templateUrl: 'assets/pages/work.html',
    controller: 'workCtrl',
    controllerAs: 'work'
  }).when('/art', {
    templateUrl: 'assets/pages/art.html',
    controller: 'artCtrl',
    controllerAs: 'art'
  }).when('/art/paintings', {
    templateUrl: 'assets/pages/paintings.html'
  }).when('/music', {
    templateUrl: 'assets/pages/music.html'
  }).when('/contact', {
    templateUrl: 'assets/pages/contact.html'
  }).otherwise({
    templateUrl: 'assets/static/404.html'
  });
});