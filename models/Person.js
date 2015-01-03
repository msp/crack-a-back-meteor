Person = new Mongo.Collection('Person');

Person.attachSchema(
    new SimpleSchema({
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    biography: {
      type: String
    }
    // createdAt: {
    //   type: Date,
    //   denyUpdate: true
    // }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Person.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
