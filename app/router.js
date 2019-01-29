import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('products', function() {
    this.route('index', { path: '/' });
    this.route('product-details', { path: '/:product_id'});
  })
});

export default Router;
