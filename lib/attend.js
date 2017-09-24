var request = require('request');

var Attend = function Attend(){

  var self = this;

  /**
   * Get list of upcoming Meetups.
   * @see https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
   * @return {Promise} Resolves to meetup.com results.
   */
  self.getMeetupEvents = function getMeetupEvents(){
    return new Promise(function(resolve, reject){

      request.get('https://api.meetup.com/Dublin-Coder-Forge/events?&sign=true&photo-host=public&page=20', function(err, res){
        if(err) return reject(err);

        var ret = [],
          events = JSON.parse(res.body);

        ret = events.map(e => {return {
          duration: e.duration,
          id: e.id,
          name: e.name,
          status: e.status,
          time: new Date(+e.time +e.utc_offset).
            toISOString().
            replace(/T/, ' ').
            replace(/\..+/, ''),
          utc_offset: e.utc_offset,
          waitlist_count: e.waitlist_count,
          yes_rsvp_count: e.yes_rsvp_count,
          venue: {
            id: e.venue.id,
            name: e.venue.name,
            lat: e.venue.lat,
            lon: e.venue.lon,
            address_1: e.venue.address_1,
            city: e.venue.city,
            country: e.venue.country,
            localized_country_name: e.venue.localized_country_name,
          },
          link: e.link,
          visibility: e.visibility,
        };});
        resolve(ret);
      });
    });
  }

  return self;
}

module.exports = new Attend();
