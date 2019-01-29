import Ember from 'ember';

export default Ember.Route.extend({
  model(params){    
    console.log('Inside product-details model', params.product_id);
    return this.get('store').findRecord('product', params.product_id)
  }
});
