Template.home.helpers({
  'feature' : function () {
    return [
      { 'text' : 'Uses trusted packages', 'icon' : 'archive', 'path' : '#packages' },
      { 'text' : 'Has a console tool', 'icon' : 'terminal', 'path' : '#console-tool' },
      { 'text' : 'Embraces HTML5', 'icon' : 'html5', 'color' : 'hover-orange', 'path' : '#html5' },
      { 'text' : 'Provides a structure', 'icon' : 'folder', 'path' : '#structure' }
    ];
  }
});

Template.home.events({
});


Template.home.rendered = function () {
  $('.dropdown')
   .dropdown()
  ;

  $('.ui.checkbox')
    .checkbox()
  ;
  // @see: http://stackoverflow.com/questions/5284814/jquery-scroll-to-div
  // $('a[href*=#]:not([href=#])').click(function () {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: target.offset().top
  //       }, 1000);
  //       return false;
  //     }
  //   }

  //   return true;
  // });
};
