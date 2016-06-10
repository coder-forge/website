import {Users} from '../lib/Users.js';

if(Meteor.isServer){

  Meteor.publish('Meteor.users', function usersPublication(){
    return Users.list; // Meteor.users.find({}, {fields: {email: 1, _id: 1, isAdmin: 1}});
  });
}
