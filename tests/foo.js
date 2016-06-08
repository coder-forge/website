import Users from "../app/imports/lib/Users.js";

const expect = require('chai').expect,
    sinon = require('sinon');

let Meteor;

beforeEach((done)=>{
    Meteor = {

    }
    done();
});

describe("Users", ()=>{

    it('gets list of users', ()=>{

        let users = new Users(Meteor);

        const usersList = users.list;
    });
});
