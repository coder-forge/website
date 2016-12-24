import { test } from 'qunit';
import moduleForAcceptance from 'coderforge-website/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home page');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('loads content', function(assert){
    visit('/');

    andThen(function(){

        // test header
        assert.equal(find('#header').length, 1, 'load header container element');
        assert.equal(find('#logo #header').length, 1, 'load header logo');
        assert.equal(find('.pages-list').length, 3, 'load header pages links');
        // test links to micro services
        assert.equal(find('.mircoservices-list').length, 3, 'load microservices list');
        // test links
        // - logo header => link home
        // - 3 pages header
        // - 3 microservices link
    })
});
