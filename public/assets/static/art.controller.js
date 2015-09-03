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
    }, {
        id: 'two',
        title: 'Elephant',
        medium: 'Pen & Prismacolor Marker',
        notes: 'Drawn from a National Geographic',
        url: 'assets/img/elephant-january-2012.jpg'
    }, {
        id: 'three',
        title: 'Boston Building',
        medium: 'Ink & Watercolor',
        notes: 'Drawn from a photo',
        url: 'assets/img/boston-building-january-2012.jpg'
    }, {
        id: 'four',
        title: 'Man - Italy',
        medium: 'Pen & Prismacolor Marker',
        notes: 'Drawn from a photo',
        url: 'assets/img/italy-man-december-2011.jpg'
    }];
});