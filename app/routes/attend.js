import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return $.getJSON('https://api.meetup.com/Dublin-Coder-Forge/events?photo-host=public&page=20&sig_id=183789567&sig=0c247a6dff1ac1cda1f65930c1923a3353074c30');
    }
});
