angular
  .module('kyleTurco')
  .controller('workCtrl', function ($scope) {
    var main = this
    main.workItems = [
      {
        title: 'They Grow Up Fast',
        services: 'Website Design/Build',
        notes: 'Designed and built a custom WordPress site for the release of "They Grow Up Fast". Built on the HTML5 Blank theme and uses Gulp, jQuery, and Custom Posts.',
        imagePath: '/assets/img/they-grow-up-fast-screenshot.jpg',
        linkUrl: 'http://theygrowupfastfilm.com',
      },
      {
        title: 'Village Nursery School',
        services: 'Website Design/Build, Logo Design',
        notes: 'Designed and built a custom WordPress site for Village Nursery School in West Lafayette, IN. Also created "Ollie the Owl", a fun mascot.',
        imagePath: '/assets/img/vns-screenshot.jpg',
        linkUrl: 'http://vnswl.com',
      },
    ]
  })
