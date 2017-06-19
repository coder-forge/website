import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chain-forge', 'Integration | Component | chain forge', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chain-forge}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#chain-forge}}
      template block text
    {{/chain-forge}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it connects to blockchain node', function(assert){

    this.render(hbs`{{chain-forge}}`);
});
