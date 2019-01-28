import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),
  actions: {
    addToCart(product) {
      if(product.get('avaliableQuantity') > 0) {
        product.decrementProperty('avaliableQuantity');
        let cartPayload = {
           itemName: product.get('itemName'),
           cost: product.get('cost')
        }
        this.get('cart').addItemToCart(cartPayload);
      }
    }
  }
});
