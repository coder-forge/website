"use strict";
/**
 * @author daithi coombes <webeire@gmail.com>
 * @module Users
 */

/**
 * @class Users
 */
export default class Users{

    /**
     * Constructor.
     * @param  {Meteor} Meteor The global `Meteor` object.
     * @return {Object}        An object {collection, fields}
     */
    constructor(Meteor){

        this.Meteor = Meteor;
    }

    /**
     * List users for dashboard
     * @return {Object} {collection, fields}
     */
    listDash(){

        return {
            collection: this.Meteor.users.find({}, {transform: transformUserList}),
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
