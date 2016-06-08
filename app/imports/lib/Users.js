/**
 * @author daithi coombes <webeire@gmail.com>
 * @module Users
 */
export default class{

    /**
     * Get a list of user documents.
     * @return {Collection} Returns a collection of documents.
     */
    get list(){
        return Meteor.users.find({}, {fields: {email: 1, _id: 1, isAdmin: 1}});
    }
}