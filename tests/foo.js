import Users from "../app/imports/lib/Users.js";

const expect = require('chai').expect,
    sinon = require('sinon');

let Meteor;

beforeEach((done)=>{
    Meteor = {
        users: {
            find: null,
        },
    };
    done();
});

describe("Users", ()=>{

    it('gets list of users', (done)=>{

        // mock/stub out code
        let findSpy = sinon.spy();
        Meteor.users.find = findSpy;
        let users = new Users(Meteor);

        // run
        const usersList = users.list,
            expectedParam1 = {},
            expectedParam2 = { fields: { email: 1, _id: 1, isAdmin: 1 } };

        // test
        expect(findSpy.calledOnce).to.be.ok;
        expect(findSpy.getCall(0).args[0]).to.deep.equal(expectedParam1);
        expect(findSpy.getCall(0).args[1]).to.deep.equal(expectedParam2);

        done();
    });
});
