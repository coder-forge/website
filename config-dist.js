/**
 * rename this file to 'config.js' in the same directory. (change values as needed).
 *
 * @link https://github.com/tutsplus/build-complete-website-expressjs/blob/master/app/config/index.js
 * @type {Object}
 */
var config = {
	local: {
		mode: 'local',
		dbName: 'cfWebsite',
		port: 3000,
		mongo: {
			host: '127.0.0.1',
			port: 27017
		}
	},
	staging: {
		mode: 'staging',
		dbName: 'cfWebsite',
		port: 4000,
		mongo: {
			host: '127.0.0.1',
			port: 27017
		}
	},
	production: {
		mode: 'production',
		dbName: 'cfWebsite',
		port: 5000,
		mongo: {
			host: '127.0.0.1',
			port: 27017
		}
	}
}
module.exports = function(mode) {
	return config[mode || process.argv[2] || 'local'] || config.local;
}
