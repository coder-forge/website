import Users from "../app/imports/lib/Users.js";

const expect = require('chai').expect,
    sinon = require('sinon');

let Meteor;

beforeEach((done)=>{
    Meteor = {
        users: {
            find: ()=>{return ['foo','bar']},
        },
    };
    done();
});

describe("Users", ()=>{

    it('list of users for GET dashboard/users', (done)=>{

        // mock/stub out code
        const users = new Users(Meteor);

        // run
        const actual = users.listDash(),
            expected = {
                collection: Meteor.users.find(),
                fields: ['email', '_id', 'isAdmin'],
            },
            expectedParam1 = {},
            expectedParam2 = { fields: { email: 1, _id: 1, isAdmin: 1 } };

        // test
        expect(actual).to.deep.equal(expected);
        done();
    });
});
