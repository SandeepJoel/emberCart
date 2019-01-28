import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),
  actions: {
    deleteItemFromCart(item){
      console.log(this.get('cart').cartItems);
      this.get('cart').deleteItemFromCart(item)
      console.log(this.get('cart').cartItems);
    }
  }
});
