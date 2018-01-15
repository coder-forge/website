'use strict';

define('coderforge-website/tests/acceptance/attend-test', ['exports', 'qunit', 'coderforge-website/tests/helpers/module-for-acceptance'], function (exports, _qunit, _coderforgeWebsiteTestsHelpersModuleForAcceptance) {

    (0, _coderforgeWebsiteTestsHelpersModuleForAcceptance['default'])('Acceptance | attend');

    (0, _qunit.test)('visiting /attend', function (assert) {
        visit('/attend');

        andThen(function () {
            assert.equal(find('ul#event-list li:first dt.name:Contains("Name")').length, 1);
            assert.equal(find('ul#event-list li:first dt.host:Contains("Host")').length, 1);
            assert.equal(find('ul#event-list li:first dt.address:Contains("Address")').length, 1);
            assert.equal(find('ul#event-list li:first dt.time:Contains("Time")').length, 1);
            assert.equal(find('ul#event-list li.event').length, 20);
            assert.equal(currentURL(), '/attend');
        });
    });
});
define('coderforge-website/tests/acceptance/attend-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/attend-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/attend-test.js should pass jshint.');
  });
});
define('coderforge-website/tests/acceptance/home-page-test', ['exports', 'qunit', 'coderforge-website/tests/helpers/module-for-acceptance'], function (exports, _qunit, _coderforgeWebsiteTestsHelpersModuleForAcceptance) {

    (0, _coderforgeWebsiteTestsHelpersModuleForAcceptance['default'])('Acceptance | home page');

    (0, _qunit.test)('visiting /', function (assert) {
        visit('/');

        andThen(function () {
            assert.equal(currentURL(), '/');
        });
    });

    (0, _qunit.test)('loads content', function (assert) {
        visit('/');

        andThen(function () {

            // test header
            assert.equal(find('nav#header').length, 1, 'load header container element');
            assert.equal(find('nav#header img#logo').length, 1, 'load header logo');
            assert.equal(find('ul#pages-list > li').length, 3, 'load header pages links');
            // test links to micro services
            assert.equal(find('ul#mircoservices-list > li').length, 3, 'load microservices list');
        });
    });

    (0, _qunit.test)('header link to Organise', function (assert) {
        visit('/');
        click('a:contains("Organise")');
        andThen(function () {
            assert.equal(currentURL(), '/organise');
        });
    });

    (0, _qunit.test)('header link to Attend', function (assert) {
        visit('/');
        click('a:contains("Attend")');
        andThen(function () {
            assert.equal(currentURL(), '/attend');
        });
    });

    (0, _qunit.test)('header link to About', function (assert) {
        visit('/');
        click('a:contains("About")');
        andThen(function () {
            assert.equal(currentURL(), '/about');
        });
    });

    // .mircoservices-list
    (0, _qunit.test)('microservice list links', function (assert) {
        visit('/');
        andThen(function () {
            assert.equal(find('ul#mircoservices-list li a').length, 3);
        });
    });
});
define('coderforge-website/tests/acceptance/home-page-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/home-page-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/home-page-test.js should pass jshint.');
  });
});
define('coderforge-website/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('coderforge-website/tests/controllers/gallery.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/gallery.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/gallery.js should pass jshint.');
  });
});
define('coderforge-website/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('coderforge-website/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('coderforge-website/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'coderforge-website/tests/helpers/start-app', 'coderforge-website/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _coderforgeWebsiteTestsHelpersStartApp, _coderforgeWebsiteTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _coderforgeWebsiteTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _coderforgeWebsiteTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('coderforge-website/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('coderforge-website/tests/helpers/resolver', ['exports', 'coderforge-website/resolver', 'coderforge-website/config/environment'], function (exports, _coderforgeWebsiteResolver, _coderforgeWebsiteConfigEnvironment) {

  var resolver = _coderforgeWebsiteResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _coderforgeWebsiteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _coderforgeWebsiteConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('coderforge-website/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('coderforge-website/tests/helpers/start-app', ['exports', 'ember', 'coderforge-website/app', 'coderforge-website/config/environment'], function (exports, _ember, _coderforgeWebsiteApp, _coderforgeWebsiteConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _coderforgeWebsiteConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _coderforgeWebsiteApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('coderforge-website/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('coderforge-website/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('coderforge-website/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('coderforge-website/tests/routes/about.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass jshint.');
  });
});
define('coderforge-website/tests/routes/attend.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/attend.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/attend.js should pass jshint.');
  });
});
define('coderforge-website/tests/routes/gallery.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/gallery.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/gallery.js should pass jshint.');
  });
});
define('coderforge-website/tests/routes/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('coderforge-website/tests/routes/organise.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/organise.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/organise.js should pass jshint.');
  });
});
define('coderforge-website/tests/test-helper', ['exports', 'coderforge-website/tests/helpers/resolver', 'ember-qunit'], function (exports, _coderforgeWebsiteTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_coderforgeWebsiteTestsHelpersResolver['default']);
});
define('coderforge-website/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('coderforge-website/tests/unit/controllers/gallery-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:gallery', 'Unit | Controller | gallery', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('coderforge-website/tests/unit/controllers/gallery-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/gallery-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/gallery-test.js should pass jshint.');
  });
});
define('coderforge-website/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('coderforge-website/tests/unit/routes/about-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('coderforge-website/tests/unit/routes/attend-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:attend', 'Unit | Route | attend', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('coderforge-website/tests/unit/routes/attend-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/attend-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/attend-test.js should pass jshint.');
  });
});
define('coderforge-website/tests/unit/routes/gallery-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:gallery', 'Unit | Route | gallery', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('coderforge-website/tests/unit/routes/gallery-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/gallery-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/gallery-test.js should pass jshint.');
  });
});
define('coderforge-website/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('coderforge-website/tests/unit/routes/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('coderforge-website/tests/unit/routes/organise-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:organise', 'Unit | Route | organise', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('coderforge-website/tests/unit/routes/organise-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/organise-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/organise-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('coderforge-website/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
