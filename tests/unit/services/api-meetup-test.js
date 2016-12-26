import { moduleFor, test } from 'ember-qunit';
import config from '../../../config/environment';

moduleFor('service:api-meetup', 'Unit | Service | api meetup', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('it will load configuration', function(assert){
    let service = this.subject();

    assert.deepEqual(config.APP.meetup, {
        key: '1234567890'}
    );
});

test('it will authenticate', function(assert){
    let service = this.subject();
});

test('it will get all meetups', function(assert){
    let service = this.subject();
});

test('it will search by geolocation', function(assert){
    let service = this.subject();
});
