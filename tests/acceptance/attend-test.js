import { test } from 'qunit';
import moduleForAcceptance from 'coderforge-website/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | attend');

test('visiting /attend', function(assert) {
    visit('/attend');

    andThen(function() {
        assert.equal(find('ul#event-list li:first img').length, 1);
        assert.equal(find('ul#event-list li:first dt.name:Contains("Name")').length, 1);
        assert.equal(find('ul#event-list li:first dt.host:Contains("Host")').length, 1);
        assert.equal(find('ul#event-list li:first dt.address:Contains("Address")').length, 1);
        assert.equal(find('ul#event-list li:first dt.time:Contains("Time")').length, 1);
        assert.equal(find('ul#event-list li.event').length, 20);
        assert.equal(currentURL(), '/attend');
    });
});
