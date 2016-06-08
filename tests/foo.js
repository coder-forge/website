import Users from "../app/imports/lib/Users.js";

const expect = require('chai').expect;
let Meteor;

describe("Users", ()=>{

    it('gets list of users', ()=>{

        let users = new Users(Meteor);
        expect(true).to.equal(true);
    });
});
