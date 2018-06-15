'use strict';

angular.module('kyleTurco').controller('artCtrl', function ($scope) {
  var main = this;
  var $artModal = $('#artModal');
  main.paintings = [{
    id: 'one',
    title: 'Afternoon at Long Hunter',
    medium: 'Oil on canvas',
    notes: 'Plein air at Long Hunter State Park',
    url: '/assets/img/kyle-turco-afternoon-at-long-hunter.jpg',
    thumbUrl: '/assets/img/kyle-turco-afternoon-at-long-hunter-thumb.jpg'
  }, {
    id: 'two',
    title: "Three Trees at Ellington",
    medium: 'Oil on board',
    notes: 'Plein air at Ellington Agricultural Center',
    url: '/assets/img/kyle-turco-three-trees-at-ellington.jpg',
    thumbUrl: '/assets/img/kyle-turco-three-trees-at-ellington-thumb.jpg'
  }, {
    id: 'three',
    title: 'Smith Brothers Car Wash',
    medium: 'Gouache on paper',
    notes: '',
    url: '/assets/img/kyle-turco-smith-bros-car-wash.jpg',
    thumbUrl: '/assets/img/kyle-turco-smith-bros-car-wash-thumb.jpg'
  }, {
    id: 'four',
    title: 'Along the Harpeth',
    medium: 'Oil on board',
    notes: 'Plein air at Edwin Warner Park',
    url: '/assets/img/kyle-turco-along-the-harpeth.jpg',
    thumbUrl: '/assets/img/kyle-turco-along-the-harpeth-thumb.jpg'
  }, {
    id: 'five',
    title: 'Grandview Ave',
    medium: 'Gouache on paper',
    notes: 'Plein air in Nashville',
    url: '/assets/img/kyle-turco-grandview-ave.jpg',
    thumbUrl: '/assets/img/kyle-turco-grandview-ave-thumb.jpg'
  }, {
    id: 'six',
    title: 'Enoshima Station',
    medium: 'Oil on cradled birch',
    notes: 'Studio painting',
    url: '/assets/img/kyle-turco-enoshima-station.jpg',
    thumbUrl: '/assets/img/kyle-turco-enoshima-station-thumb.jpg'
  }, {
    id: 'seven',
    title: 'Sunset on Mill Creek',
    medium: 'Gouache on paper',
    notes: 'Plein air at Mill Creek Greenway',
    url: '/assets/img/kyle-turco-sunset-on-mill-creek.jpg',
    thumbUrl: '/assets/img/kyle-turco-sunset-on-mill-creek-thumb.jpg'
  }, {
    id: 'eight',
    title: 'Alley Behind La Hacienda',
    medium: 'Gouache on paper',
    notes: 'Plein air in Nashville',
    url: '/assets/img/kyle-turco-alley-behind-la-hacienda.jpg',
    thumbUrl: '/assets/img/kyle-turco-alley-behind-la-hacienda-thumb.jpg'
  }];
  main.modalLoad = function (id, group) {
    main[group].forEach(function (painting) {
      if (painting.id === id) {
        main.current = painting;
      }
    });
    $artModal.modal('show');
    $artModal.on('hidden.bs.modal', function (e) {
      $scope.$apply();
    });
  };
  main.modalHide = function () {
    $artModal.modal('hide');
  };
});