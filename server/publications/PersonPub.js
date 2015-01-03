Meteor.publish('Person', function () {
  return Person.find();
});
