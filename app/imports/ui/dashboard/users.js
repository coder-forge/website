import Users from '../../lib/Users';

const users = new Users(Meteor);

Template.adminUsers.onCreated(function adminUsersCreated(){
  Meteor.subscribe('Meteor.users');
});

Template.adminUsers.helpers({
  'userList': ()=>{
      // Meteor.users.find({}, {transform: transformUserList})
      return users.listDash();
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
          isAdmin: ()=>{
            return new Spacebars.SafeString((doc.isAdmin) ?
              '<i class="fa fa-check" aria-hidden="true"></i>' :  // check
              '<i class="fa fa-times" aria-hidden="true"></i>'    // cross
            );
          },
      };
    return doc;
}
