"use strict";
import Users from '../../api/users.js';

Template.adminUsers.onCreated(function adminUsersCreated(){
  Meteor.subscribe('Meteor.users');
});

Template.adminUsers.helpers({
  'userList': ()=>{
    return {
      collection: Meteor.users.find({}, {transform: transformUserList}),
      fields: ['email', '_id'],
    };
  },
});

/**
 * User list user collection transform
 * @param  {[type]} doc [description]
 * @return {[type]}     [description]
 */
const transformUserList = (doc)=>{
    if(doc.emails)
      return {
          email: doc.emails[0].address,
          _id: doc._id,
      };
    return doc;
}
