import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('organise');
  this.route('about');
  this.route('attend');
  this.route('gallery');
});

export default Router;
