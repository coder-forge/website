//export const Users = new Mongo.Collection('users');

if(Meteor.isServer){

  Meteor.publish('Meteor.users', function usersPublication(){
    return Meteor.users.find({});
  });
}
