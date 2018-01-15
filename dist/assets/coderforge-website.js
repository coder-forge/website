"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('coderforge-website/app', ['exports', 'ember', 'coderforge-website/resolver', 'ember-load-initializers', 'coderforge-website/config/environment'], function (exports, _ember, _coderforgeWebsiteResolver, _emberLoadInitializers, _coderforgeWebsiteConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _coderforgeWebsiteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _coderforgeWebsiteConfigEnvironment['default'].podModulePrefix,
    Resolver: _coderforgeWebsiteResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _coderforgeWebsiteConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('coderforge-website/components/justified-gallery', ['exports', 'ember-justified-gallery/components/justified-gallery'], function (exports, _emberJustifiedGalleryComponentsJustifiedGallery) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberJustifiedGalleryComponentsJustifiedGallery['default'];
    }
  });
});
define("coderforge-website/controllers/gallery", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Controller.extend({

        images: [{
            thumb: "/photos/table-tennis-500x375.jpg",
            src: "/photos/table-tennis-2592x1944.jpg",
            title: "CoderForge training for Table Tennis T4 2016"
        }, {
            thumb: "/photos/Radical_Lightbox-7687-500x331.jpg",
            src: "/photos/Radical_Lightbox-7687-1024x678.jpg",
            title: "CoderForge blockchain event @ Bank of Ireland 2017"
        }, {
            thumb: "/photos/C2eUNOdWgAAd9S-900x696.jpg",
            src: "/photos/C2eUNOdWgAAd9S-900x696.jpg",
            title: "CoderForge blockchain event @ Bank of Ireland 2017"
        }]
    });
});
define('coderforge-website/helpers/app-version', ['exports', 'ember', 'coderforge-website/config/environment'], function (exports, _ember, _coderforgeWebsiteConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _coderforgeWebsiteConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('coderforge-website/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('coderforge-website/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('coderforge-website/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'coderforge-website/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _coderforgeWebsiteConfigEnvironment) {
  var _config$APP = _coderforgeWebsiteConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('coderforge-website/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('coderforge-website/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('coderforge-website/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'coderforge-website/config/environment', 'coderforge-website/mirage/config', 'ember-cli-mirage/server', 'lodash/object/assign'], function (exports, _emberCliMirageUtilsReadModules, _coderforgeWebsiteConfigEnvironment, _coderforgeWebsiteMirageConfig, _emberCliMirageServer, _lodashObjectAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_coderforgeWebsiteConfigEnvironment['default'].environment, _coderforgeWebsiteConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_coderforgeWebsiteConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _coderforgeWebsiteConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashObjectAssign['default'])(modules, { environment: environment, baseConfig: _coderforgeWebsiteMirageConfig['default'], testConfig: _coderforgeWebsiteMirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('coderforge-website/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('coderforge-website/initializers/export-application-global', ['exports', 'ember', 'coderforge-website/config/environment'], function (exports, _ember, _coderforgeWebsiteConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_coderforgeWebsiteConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _coderforgeWebsiteConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_coderforgeWebsiteConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('coderforge-website/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('coderforge-website/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('coderforge-website/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("coderforge-website/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('coderforge-website/mirage/config', ['exports'], function (exports) {
    exports['default'] = function () {
        this.namespace = '/api';

        this.get('https://api.meetup.com/Dublin-Coder-Forge/events', function () {
            return [{ "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywcbhb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1483642800000, "updated": 1479399232000, "utc_offset": 0, "waitlist_count": 0, "yes_rsvp_count": 2, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/236288675/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywcbqb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1484247600000, "updated": 1479399232000, "utc_offset": 0, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywcbqb/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywcbzb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1484852400000, "updated": 1479399232000, "utc_offset": 0, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywcbzb/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywcbjc", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1485457200000, "updated": 1479399232000, "utc_offset": 0, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywcbjc/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywdbdb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1486062000000, "updated": 1479399232000, "utc_offset": 0, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywdbdb/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywdbmb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1486666800000, "updated": 1479399232000, "utc_offset": 0, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywdbmb/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywdbvb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1487271600000, "updated": 1479399232000, "utc_offset": 0, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywdbvb/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywdbfc", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1487876400000, "updated": 1479399232000, "utc_offset": 0, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywdbfc/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywfbdb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1488481200000, "updated": 1479399232000, "utc_offset": 0, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywfbdb/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywfbmb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1489086000000, "updated": 1479399232000, "utc_offset": 0, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywfbmb/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywfbvb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1489690800000, "updated": 1479399232000, "utc_offset": 0, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywfbvb/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywfbfc", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1490295600000, "updated": 1479399232000, "utc_offset": 0, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywfbfc/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywfbnc", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1490896800000, "updated": 1479399232000, "utc_offset": 3600000, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywfbnc/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywgbjb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1491501600000, "updated": 1479399232000, "utc_offset": 3600000, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywgbjb/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywgbrb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1492106400000, "updated": 1479399232000, "utc_offset": 3600000, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywgbrb/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywgbbc", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1492711200000, "updated": 1479399232000, "utc_offset": 3600000, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywgbbc/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywgbkc", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1493316000000, "updated": 1479399232000, "utc_offset": 3600000, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywgbkc/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywhbgb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1493920800000, "updated": 1479399232000, "utc_offset": 3600000, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywhbgb/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywhbpb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1494525600000, "updated": 1479399232000, "utc_offset": 3600000, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywhbpb/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }, { "created": 1479399232000, "duration": 7200000, "id": "lqbdgmywhbxb", "name": "Coder Forge @ DFC - learn and code, then code some more", "status": "upcoming", "time": 1495130400000, "updated": 1479399232000, "utc_offset": 3600000, "waitlist_count": 0, "yes_rsvp_count": 1, "venue": { "id": 24906199, "name": "Dublin Food Co-operative Society Ltd", "lat": 53.337806701660156, "lon": -6.276706218719482, "repinned": false, "address_1": "12 Newmarket, Dublin 8, Ireland", "city": "Dublin", "country": "ie", "localized_country_name": "Ireland" }, "group": { "created": 1452365210000, "name": "Dublin - Coder Forge", "id": 19309553, "join_mode": "open", "lat": 53.33000183105469, "lon": -6.25, "urlname": "Dublin-Coder-Forge", "who": "Coders" }, "link": "https://www.meetup.com/Dublin-Coder-Forge/events/lqbdgmywhbxb/", "description": "<p>This meetup hopes to provide a weekly space for people interested in learning to code. With the current technology available to us it is perfectly feasible to trade as a coder whilst you learn your full skill set. No different to any other apprenticeship. Also using this method gives you the chance to see if coding or software development is something you're interested in, it gives you a chance to test the market. These \"forges\" also hope to balance some of the shortfalls to the method of training used within some of our educational institutions today, which always appear to be behind the technology that is required by current market forces. At a coder forge the format is flexible enough to change from nodejs to php or from python to whatever the next new big thing is. It is entirely up to those that are present. The coder forges are modeled on the popular \"coder-dojo\", but with a focus on adults rather than kids, and thus an ability to learn where to find work online and in the locality can also be introduced.</p> ", "visibility": "public" }];
        });

        /**
        // get venue info
        this.get('/venues', function(){
             return {
                "data": [
                    {
                        "type": "venue",
                        "id": "venue_id",
                        "attributes":{
                            "lon": -6.276706,
                            "lat": 53.337807,
                            "title": "Wobbily Coding Emporium",
                            "host": "Happy Charlies Wobbily Emporium",
                            "qr": "http://link.to.qr/image.svg",
                            "nextEvent": "ISO date time",
                            "country": "Ireland",
                            "address_1": "12 Newmarket, Dublin 8, Ireland",
                            "meetup": "http://link.to.meetup",
                        }
                    },
                ],
            }
        });
        */
    };
});
define("coderforge-website/mirage/scenarios/default", ["exports"], function (exports) {
  exports["default"] = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
       Make sure to define a factory for each model you want to create.
    */

    // server.createList('post', 10);
  };
});
define('coderforge-website/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.JSONAPISerializer.extend({});
});
define('coderforge-website/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('coderforge-website/router', ['exports', 'ember', 'coderforge-website/config/environment'], function (exports, _ember, _coderforgeWebsiteConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _coderforgeWebsiteConfigEnvironment['default'].locationType,
    rootURL: _coderforgeWebsiteConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('organise');
    this.route('about');
    this.route('attend');
    this.route('gallery');
  });

  exports['default'] = Router;
});
define('coderforge-website/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('coderforge-website/routes/attend', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return _ember['default'].$.getJSON('https://api.meetup.com/Dublin-Coder-Forge/events?photo-host=public&page=20&sig_id=183789567&sig=0c247a6dff1ac1cda1f65930c1923a3353074c30').then(function (res) {
                for (var x = 0; x < res.length; x++) {
                    res[x].time = new Date(res[x].time); //unix_timestamp*1000);
                }

                return res;
            });
        }
    });
});
define("coderforge-website/routes/gallery", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Route.extend({

        images: function images() {
            return [{
                thumb: "https://www.dropbox.com/s/9bvedjem4luwfng/20161005_201003.jpg?dl=0",
                src: "https://www.dropbox.com/s/9bvedjem4luwfng/20161005_201003.jpg?dl=0",
                title: "anything for now"
            }];
        }
    });
});
define('coderforge-website/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('coderforge-website/routes/organise', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('coderforge-website/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("coderforge-website/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "W6Q/xnDC", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"well\"],[\"flush-element\"],[\"text\",\"\\n  Simply put: A community based learning charity\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"title\"],[\"flush-element\"],[\"text\",\"The Coder Forge Community\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  Coder Forge is about providing a weekly space, for people 17yrs+, that are\\n  interested in learning a trade as a coder, whether that be working locally,\\n  commercially, or online. With the technology currently available to us it is\\n  perfectly feasible to learn a trade as a coder whilst you learn your full\\n  skill set. No different to any other apprenticeship. Also using this method\\n  gives the individual the chance to see if coding, or software development in\\n  general, is something their interested in. It gives the individual a chance to\\n  test the market when choosing a career path.\\n\"],[\"close-element\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  We hope to provide a place for adults to learn and trade as a `coder`. They are\\n  open to all, from complete newbies (noobs) to advanced programmers (guru's).\\n  There is no set curriculum and no costs either. Each Forge must be realised\\n  out of a greater need within the community and must therefore support and\\n  promote local services, whether fee paying or not.\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"title\"],[\"flush-element\"],[\"text\",\"A Coding Forge\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  These Forge's also hope to improve the relationship between the level of\\n  knowledge of the coder and the current market forces. It is for this reason\\n  the Forge's will be based on a bottom up decision making process by allowing\\n  the members of each individual Forge to decide what is thought and by whom. By\\n  keeping decisions on the format of the individual Forge's as distruted as\\n  possible it is hoped to realise the full potential of allowing the current\\n  technologies and tools to gain traction with those that are working and coming\\n  into the trade.\\n\"],[\"close-element\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  A Coding Forge is a member of the Coder Forge community and has access to a\\n  growing set of collaboration tools. There is a huge amount of autonomy\\n  expected in a Forge. For this reason there are only a handful of requirements\\n  to be accepted as a Coding Forge:\\n  \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"well\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"No costs to members\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"All code produced is under MIT license\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Mixed branding between hosting organisations and Coder Forge\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  At a coder forge the format is flexible enough to change from `nodejs` to\\n  `php` or from `python` to whatever the next new big thing is. It is entirely\\n  up to those that are present. The coder forges are modeled on the popular\\n  `coder-dojo` but with a focus on adults rather than kids, and thus an ability\\n  to learn where to find work, either in the locality, or online. It must be\\n  noted that due to the charity nature of the Coder Forge, all closed source\\n  projects should be left at the door, all code and projects created in a coder\\n  forge are licensed under MIT and Creative Commons respectively.\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"title\"],[\"flush-element\"],[\"text\",\"A Coding Forge and the Community\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  As well of the core goal to give everybody the right to learn a career as a\\n  coder, there are two issue's that the Coder Forge would hope to solve:\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"well\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Becoming a financial advantage to the community and local groups\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Digital Divide\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"b\",[]],[\"flush-element\"],[\"text\",\"On becoming a financial advantage to the community\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  In order for Coder Forge's to be accessible to all then they must be run on a\\n  charity basis, thus free. At the same time this charity must provide a service\\n  to the greater community and this includes supporting local fee paying\\n  services. Within the greater community there exists organisations, co-op's,\\n  charities, open source spaces, makers and hacker spaces, business, that have\\n  fixed assets and running costs. It is inevitable that Coder Forge's will be\\n  using these spaces, therefore there must be the ability for a Forge to provide\\n  some financial support if required.\\n\"],[\"close-element\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  There are two ways that a Coder Forge can become an asset to other groups in\\n  the area. In the first instance a Forge can look for local sponsorship, for\\n  example a local accountancy firm that deals with freelancer's would have a\\n  vested interest in a Forge. In the second instance, organisations that run a\\n  Forge can also run paid for, more professional and curriculum based classes,\\n  along side the weekly Coder Forge night. Converstions to the fee paying\\n  classes could be made by the organisation from their weekly, free, Coder Forge\\n  night.\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"b\",[]],[\"flush-element\"],[\"text\",\"On the digital divide\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  This is an ongoing battle. As other groups and meetups say `bring your own\\n  laptop`, the Coder Forge community cannot. In order to help overcome the\\n  digital divide it is completely up to the individual Forge whether they are\\n  able to provide equipment or not. However, where ever a Forge is forced to\\n  employ a 'bring your own laptop' philosophy it must be seen as a blocker to\\n  the overall project that must be solved. In our current environment this\\n  blocker will effect the majority of Forges.\\n\"],[\"close-element\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  With the advent of SMB desktops, such as the `Raspberry Pi`, the `Galileo` and\\n  open source controllers such as the `Andrino`, it maybecome feasible to provide\\n  cheap open source computers that could be paid for, cheaply, by local services\\n  or across the entirity of the project through large global sponsorship. The\\n  digital divide must be solved by what ever route is necessary.\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"well\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Conclusion\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n    Coder forges are to be stress free, without any set out curriculum, and they\\n    must also support and work with other open projects in their locality.\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"based on open source methodologies and philosophies\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"not tied down to one specific language or industry\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"community based structures where members can decide the direction and format of workshops\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"an online portal for mentor and coder collaboration\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  As you can see this site is a work in progress, as is the project on a whole,\\n  but please do drop into our next meetup and see what it is all about.\\n\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "coderforge-website/templates/about.hbs" } });
});
define("coderforge-website/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "E0Vu2vNu", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"comment\",\" Static navbar \"],[\"text\",\"\\n  \"],[\"open-element\",\"nav\",[]],[\"static-attr\",\"id\",\"header\"],[\"static-attr\",\"class\",\"navbar navbar-default\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle collapsed\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#navbar\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"static-attr\",\"aria-controls\",\"navbar\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"navbar-brand\"]],4],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"navbar\"],[\"static-attr\",\"class\",\"navbar-collapse collapse\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"id\",\"pages-list\"],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"organise\"],null,3],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"attend\"],null,2],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"gallery\"],null,1],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"about\"],null,0],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"comment\",\"/.nav-collapse \"],[\"text\",\"\\n    \"],[\"close-element\"],[\"comment\",\"/.container-fluid \"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"About\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Gallery\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Attend\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Organise\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"id\",\"logo\"],[\"static-attr\",\"src\",\"/branding/images/logo-title.svg\"],[\"static-attr\",\"alt\",\"Coder Forge Logo\"],[\"static-attr\",\"title\",\"Coder Forge\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "coderforge-website/templates/application.hbs" } });
});
define("coderforge-website/templates/attend", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ZqRwcMGy", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"List of venues\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"id\",\"event-list\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"event\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"dt\",[]],[\"static-attr\",\"class\",\"name\"],[\"flush-element\"],[\"text\",\"Name\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"dd\",[]],[\"static-attr\",\"class\",\"name\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"event\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"dt\",[]],[\"static-attr\",\"class\",\"host\"],[\"flush-element\"],[\"text\",\"Host\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"dd\",[]],[\"static-attr\",\"class\",\"host\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"event\",\"venue\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"dt\",[]],[\"static-attr\",\"class\",\"address\"],[\"flush-element\"],[\"text\",\"Address\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"dd\",[]],[\"static-attr\",\"class\",\"address\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"event\",\"venue\",\"address_1\"]],false],[\"text\",\", \"],[\"append\",[\"unknown\",[\"event\",\"venue\",\"city\"]],false],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"dt\",[]],[\"static-attr\",\"class\",\"time\"],[\"flush-element\"],[\"text\",\"Time\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"dd\",[]],[\"static-attr\",\"class\",\"time\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"event\",\"time\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"event\"]}],\"hasPartials\":false}", "meta": { "moduleName": "coderforge-website/templates/attend.hbs" } });
});
define("coderforge-website/templates/gallery", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hipKcntH", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\"],[\"block\",[\"justified-gallery\"],null,null,1]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"image\",\"src\"]]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"image\",\"thumb\"]]]]],[\"dynamic-attr\",\"alt\",[\"concat\",[[\"unknown\",[\"image\",\"title\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"image\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"images\"]]],null,0]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "coderforge-website/templates/gallery.hbs" } });
});
define("coderforge-website/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "eactGsFy", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"page-header\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Coder Forge  \"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"text\",\"A place to learn how to forge out code, to smyth out patterns and designs.\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Welcome to the coder forge.\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"These events hope to provide a place for adults to learn and trade as a\\n        `coder`. They are open to all, from complete newbies (noobs) to advanced\\n        programmers (guru's).\"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"There is no set curriculum and no costs either. Because of this these weekly\\n        meetups will be on an open door basis.\"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"As you can see this site is a work in progress, as is the project on a whole,\\n        but please do drop into our next \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://www.meetup.com/Dublin-Coder-Forge/events/227966239/\"],[\"flush-element\"],[\"text\",\"forge\"],[\"close-element\"],[\"text\",\" and see what it is all about.\"],[\"close-element\"],[\"text\",\"\\n\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"mailto:coderforge.dublin@gmail.com\"],[\"flush-element\"],[\"text\",\"contact us\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"id\",\"mircoservices-list\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://coderforge.slack.com\"],[\"flush-element\"],[\"text\",\"Slack Channel\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/coder-forge\"],[\"flush-element\"],[\"text\",\"Github Repositories\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://www.meetup.com/Dublin-Coder-Forge\"],[\"flush-element\"],[\"text\",\"CF Meetups\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "coderforge-website/templates/index.hbs" } });
});
define("coderforge-website/templates/organise", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vCG4Tw6G", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Organising a coder forge is a 2 step process. Important information can be\\nfound on our \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://coder-forge.github.io/about.html\"],[\"flush-element\"],[\"text\",\"About Us\"],[\"close-element\"],[\"text\",\" page.\\nIt is highly recommended to read this first\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"well\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Step 1\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Your forge must provide:\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"ol\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"No costs to members\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"All code produced is under \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://opensource.org/licenses/MIT\"],[\"flush-element\"],[\"text\",\"MIT\"],[\"close-element\"],[\"text\",\" license, all projects under \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://creativecommons.org/licenses/by/4.0/\"],[\"flush-element\"],[\"text\",\"Creative Commons\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Mixed branding between your self or hosting organising and the Coder Forge Charity\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"well\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Step 2\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"You may need a \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://www.meetup.com\"],[\"flush-element\"],[\"text\",\"meetup.com\"],[\"close-element\"],[\"text\",\" account\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Advertise your forge on our \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://www.meetup.com/Dublin-Coder-Forge/messages/boards/thread/49821895\"],[\"flush-element\"],[\"text\",\"meetup discussion\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "coderforge-website/templates/organise.hbs" } });
});
define('coderforge-website/tests/mirage/mirage/config.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/config.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass jshint.');
  });
});
define('coderforge-website/tests/mirage/mirage/scenarios/default.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/scenarios/default.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass jshint.');
  });
});
define('coderforge-website/tests/mirage/mirage/serializers/application.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass jshint.');
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('coderforge-website/config/environment', ['ember'], function(Ember) {
  var prefix = 'coderforge-website';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("coderforge-website/app")["default"].create({"name":"coderforge-website","version":"0.0.0+d852210a"});
}

/* jshint ignore:end */
//# sourceMappingURL=coderforge-website.map
