import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  cartTotal: Ember.computed('cart.@each.quantity', function(){
    return this.get('cart').reduce(function(sum, cartitem) {
      // TODO: what the dot notation (cartitem.quantity) doesn't work here.. ?
      return (sum + (cartitem.get('quantity') * cartitem.get('product.cost')))
    }, 0)
  }),
  init() {
    this._super(...arguments);
  },
  actions: {
    deleteItemFromCart(item){
      let product = item.get('product')
      // restore the display products values
      product.set('avaliableQuantity', product.get('avaliableQuantity') + item.get('quantity'))
      this.get('store').findRecord('cartitem', item.get('id'), { backgroundReload: false} ).then(function(cartitem){
        cartitem.deleteRecord();
        cartitem.save();
      }) 
    },
    decrementQuantityFromCart(item) {
      let product = item.get('product');
      if (item.get('quantity') > 1) {
        product.incrementProperty('avaliableQuantity')
        this.get('store').findRecord('cartitem', item.get('id'), { backgroundReload: false} ).then(function(cartitem){
          cartitem.decrementProperty('quantity');
          cartitem.save();
        })
      } else if (item.get('quantity') == 1) {
        this.send('deleteItemFromCart', item);
      }
    },
    incrementQuantityFromCart(item) {
      let product = item.get('product');
      if (product.get('avaliableQuantity') > 0) {
        product.decrementProperty('avaliableQuantity')
        this.get('store').findRecord('cartitem', item.get('id'), { backgroundReload: false} ).then(function(cartitem){
          cartitem.incrementProperty('quantity');
          cartitem.save();
        })
      } 
    }
  }  
});
