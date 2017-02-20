// test code message


import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return Ember.$.getJSON('https://api.meetup.com/Dublin-Coder-Forge/events?photo-host=public&page=20&sig_id=183789567&sig=0c247a6dff1ac1cda1f65930c1923a3353074c30')
            .then(res => {
                for(let x=0; x<res.length; x++){
                    res[x].time = new Date(res[x].time); //unix_timestamp*1000);
                }

                return res;
            });
    }
});
