// test code message


import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return Ember.$.getJSON('https://api.meetup.com/Dublin-Coder-Forge/events?photo-host=public&page=20&sig_id=10623597&sig=ea969aab78bd47dbf4dd9ae9163a19f75904b0f0')
            .then(res => {
                for(let x=0; x<res.length; x++){
                    res[x].time = new Date(res[x].time); //unix_timestamp*1000);
                }

                return res;
            });
    }
});
