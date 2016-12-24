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
    });
});

test('logo link to homepage', function(assert){
    visit('/');
    click('a #logo #header');
    andThen(function(){
        assert.equal(currentURL(), '/', 'logo links to homepage');
    });
});

test('header link to Organise', function(assert){
    visit('/');
    click('a:contains("Organise")');
    andThen(function(){
        assert.equal(currentURL(), '/organise');
    });
});

test('header link to Attend', function(assert){
    visit('/');
    click('a:contains("Attend")');
    andThen(function(){
        assert.equal(currentURL(), '/attend');
    });
});

test('header link to About', function(assert){
    visit('/');
    click('a:contains("About")');
    andThen(function(){
        assert.equal(currentURL(), '/about');
    });
});

// .mircoservices-list
test('microservice list link to Slack channel', function(assert){
    visit('/');
    click('a:contains("Slack Channel")');
    andThen(function(){
        assert.equal(currentURL(), 'https://coderforge.slack.com');
    });
});
test('microservice list link to Github channel', function(assert){
    visit('/');
    click('a:contains("Github Repositories")');
    andThen(function(){
        assert.equal(currentURL(), 'https://github.com/coder-forge');
    });
});
test('microservice list link to Meetup channel', function(assert){
    visit('/');
    click('a:contains("CF Meetups")');
    andThen(function(){
        assert.equal(currentURL(), 'https://www.meetup.com/Dublin-Coder-Forge/');
    });
});
