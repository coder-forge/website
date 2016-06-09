"use strict";
/**
 * @author daithi coombes <webeire@gmail.com>
 * @module Users
 */

/**
 * @class Users
 */
export default class Users{

    constructor(Meteor){
        this.Meteor = Meteor || import('Meteor');
    }

    /**
     * List users for dashboard
     * @return {Object} {collection, fields}
     */
    function listDash(){
        // Meteor.users.find({}, {transform: transformUserList})
        return {
            collection: ['one','two'], //Meteor.users.find({}),
            fields: ['email', '_id', 'isAdmin'],
        };
    }

    /**
     * Get a list of user documents.
     * @return {Collection} Returns a collection of documents.
     */
    get list(){
        const users = this.Meteor.users.find({}, {fields: {email: 1, _id: 1, isAdmin: 1}});
        return users;
    }

}

/**
 * User list user collection transform
 * @param  {[type]} doc [description]
 * @return {[type]}     [description]
 */
transformUserList(doc)=>{
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
