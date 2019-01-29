import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service(),
  actions: {
    deleteItemFromCart(item){
      let product = this.get('products').findBy('itemName', item.itemName);
      // restore the display products values
      Ember.set(product, 'avaliableQuantity', Ember.get(product, 'avaliableQuantity') + item.quantity)
      this.get('cart').deleteItemFromCart(item)
    },
    decrementQuantityFromCart(item) {
      // TODO: fix the dependencies --- check if there are any other ways ?
      let product = this.get('products').findBy('itemName', item.itemName)
      if (item.quantity > 1) {
        this.get('products').findBy('itemName', item.itemName).incrementProperty('avaliableQuantity');
        Ember.set(item, 'quantity', Ember.get(item, 'quantity') - 1);
        Ember.set(item, 'productGroupCost', Ember.get(item, 'quantity') * item.cost );
      } else if (item.quantity == 1) {
        this.send('deleteItemFromCart', item);
      }
    },
    incrementQuantityFromCart(item) {
      // TODO: fix the dependencies
      let product = this.get('products').findBy('itemName', item.itemName)
      if (Ember.get(product, 'avaliableQuantity') > 0) {
        this.get('products').findBy('itemName', item.itemName).decrementProperty('avaliableQuantity');
        Ember.set(item, 'quantity', Ember.get(item, 'quantity') + 1);
        Ember.set(item, 'productGroupCost', Ember.get(item, 'quantity') * item.cost );
      } 
    }
  }  
});
