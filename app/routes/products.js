import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      cart: this.get('store').findAll('cartitem')
    });
  }
});
