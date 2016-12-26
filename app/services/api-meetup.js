import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
    config: null,

    init(){
        this.config = config.APP.keys.meetup.key;
    }


});
