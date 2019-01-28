import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createProduct(productsCount) {
      let product = this.get('product');
      let shortDescription = this.get('shortDescription')
      let cost = this.get('cost')
      let stockQuantity = this.get('stockQuantity')
      
      // what is the difference between these two methods
      // this.get('store').push({
      //   data: {          
      //     type: 'product',
      //     id: productsCount + 1,
      //     attributes: {
      //       itemName: product,
      //       shortDescription: shortDescription,
      //       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde necessitatibus magnam ipsum eum animi error dolor accusamus officia dolorum minus, illum rerum aut, quaerat molestias, porro nulla maxime dicta",
      //       cost: cost,
      //       avaliableQuantity: stockQuantity,
      //     }
      //   }
      // })

      let newProductRecord = this.get('store').createRecord('product', {
        id: productsCount + 1,
        itemName: product,
        shortDescription: shortDescription,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde necessitatibus magnam ipsum eum animi error dolor accusamus officia dolorum minus, illum rerum aut, quaerat molestias, porro nulla maxime dicta",
        cost: cost,
        avaliableQuantity: stockQuantity,
      });

      this.set('product', '');
      this.set('shortDescription', '')
      this.set('cost', '')
      this.set('stockQuantity', '')
      newProductRecord.save();
    }
  }
});
  