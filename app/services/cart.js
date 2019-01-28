import Ember from 'ember';

export default Ember.Service.extend({
  cartItems: null,
  init() {
    this._super(...arguments);
    this.set('cartItems', [])
  },

  cartTotal: Ember.computed('cartItems.@each.productGroupCost', function(){
    return this.get('cartItems').reduce(function(acc, item){
      return acc + item.productGroupCost
    }, 0); 
  }),

  addItemToCart(item) {
    if(this.get('cartItems').isAny('itemName',item.itemName)){
      let product = this.get('cartItems').findBy('itemName', item.itemName);
      // why the findBy is not returning ember Object, if so then why cant i use the get function
      // console.log(product.get('quantity'));
      Ember.set(product, 'quantity', Ember.get(product,'quantity') + 1);
      Ember.set(product, 'productGroupCost', Ember.get(product,'quantity') * item.cost)
    } else {
      item['quantity'] = 1;
      item['productGroupCost'] = item['cost'];
      this.get('cartItems').pushObject(item);
    }
  },

  deleteItemFromCart(item) {
    this.get('cartItems').removeObject(item);
  }
  

});
