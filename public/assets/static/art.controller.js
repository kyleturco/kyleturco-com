'use strict';

angular.module('kyleTurco').controller('artCtrl', function ($scope) {

  var main = this;

  main.modalLoad = function () {
    $('#artModal').modal('show');
    $('#artModal').on('hidden.bs.modal', function (e) {
      $scope.$apply();
    });
  };

  main.paintings = [{
    id: 'one',
    title: 'Italy Street',
    medium: 'Pen & Ink',
    notes: 'Drawn from a photo',
    url: 'assets/img/italy-street-2012.jpg'
  }];
});