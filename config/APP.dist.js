/* jshint node: true */

module.exports = function(environment){

    keys = {
        "test": {
            meetup: {
                key: '1234567890',
                host: 'https://api.meetup.com',
            },
        },
        "development": {
            meetup: {
                key: '1234567890',
                host: 'https://api.meetup.com',
            },
        },
        "production": {
            meetup: {
                key: '1234567890',
                host: 'https://api.meetup.com',
            },
        },
    };

    return keys[environment];
}
