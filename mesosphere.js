/*
  Mesosphere and server method should both run in shared space for dual client/server
  validation to work.
 */

// Meso exmaple taken from : https://github.com/copleykj/meso-test

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
    // https://docs.meteor.com/#/full/auditargumentchecks
    check(arguments, [Match.Any])
    Mesosphere.signupForm.validate(rawData, function(errors, formData){
        if(!errors){
            console.log("No Errors Found");
            console.log(formData);
            //Do what you want with the validated data.
            Person.insert(formData, function(error, result) {
              console.log(error);
              console.log(result);
              //The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().invalidKeys()
            });

            Router.go('/people');
        }else{
            console.log("Errors");
            _(errors).each( function( value, key ) {
              console.log(key+": "+value.message);
            });
        }
    });
  }
});