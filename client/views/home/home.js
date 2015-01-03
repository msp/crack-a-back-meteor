/*
  Mesosphere and server method should both run in shared space for dual client/server
  validation to work.
 */
Mesosphere({
    name: 'signupForm',
    method: 'signupUser',
    fields: {
        firstName: {
            required: true,
            message: 'Please enter a valid first name'
        },
        lastName: {
            required: true,
            message: "Please enter a valid last name 6 - 30 chars"
        },
        biography: {
            required: true,
            rules: {
                minLength: 10,
                maxLength: 300,
            },
            message: "tell me a story?"
        }
    },
    onFailure: function(erroredFields, formHandle){
      //custom code here
      Mesosphere.Utils.failureCallback(erroredFields, formHandle);
    }
});

Meteor.methods({
  signupUser: function (rawData) {
    console.log("In signup user");
    Mesosphere.signupForm.validate(rawData, function(errors, formData){
        if(!errors){
            console.log("No Errors Found");
            //Do what you want with the validated data.
        }else{
            console.log("Errors");
            _(errors).each( function( value, key ) {
              console.log(key+": "+value.message);
            });
        }
    });
  }
});


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
