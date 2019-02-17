import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  actions: {
    addToCart(product) {
      if(product.get('avaliableQuantity') > 0) {
        // TODO: should persist this avaliableQuantity in backend.
        product.decrementProperty('avaliableQuantity');        
        let ci = this.get('store').peekAll('cartitem').find(function(element){
          return element.get('product.itemName') === product.get('itemName');
        });
        if(ci) {
          this.get('store').findRecord('cartitem', ci.get('id')).then(function(existingCartItem){
            existingCartItem.incrementProperty('quantity')
            existingCartItem.save();
          });
        } else {
          this.get('store').createRecord('cartitem', {
            quantity: 1,
            product: product
          }).save();
        }        
      }
    }
  }
});
