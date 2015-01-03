Meteor.subscribe("Person");

Template['people'].helpers({
  'person' : function () {
    return Person.find();
  }
});

Template['people'].events({
});
