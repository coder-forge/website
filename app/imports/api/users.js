//export const Users = new Mongo.Collection('users');

if(Meteor.isServer){

  Meteor.publish('Meteor.users', function usersPublication(){
    return Meteor.users.find({}, {fields: {email: 1, _id: 1, isAdmin: 1}});
  });
}
