'use strict';

angular.module('kyleTurco').controller('blogCtrl', function ($scope) {
  var main = this;
  main.posts = [{
    title: 'Plein Air: Henry Horton State Park',
    date: 'September 20, 2017',
    category: 'Painting',
    paragraphOne: 'I went out for a plein adventure to Henry Horton State Park, just outside of Chapel Hill, TN. I was fortunate to find a spot on a rock ledge right along the Duck River. In my previous plein air effort, I struggled to create depth or interest because my subject matter was monotonous in color and value. With this in mind I put together a composition involving the river, trees, and sky.',
    paragraphTwo: 'My easel was facing the direct sun so after getting home I noticed a lack in dynamic range throughout the painting. The bright sections were far too dark. I touched these areas up the best I could without compromising the spirit of the plein air work. This was just a living reminder that it’s important to establish color values at the beginning. Here’s a progress shot as well as a photo of the final painting.',
    imageOne: {
      url: '/assets/img/kyle-turco-plein-air-henry-horton-park.jpg',
      title: 'Kyle Turco Plein Air Henry Horton Park'
    },
    imageTwo: {
      url: '/assets/img/kyle-turco-along-the-duck-river.jpg',
      title: 'Kyle Turco Along the Duck River'
    }
  }];
});