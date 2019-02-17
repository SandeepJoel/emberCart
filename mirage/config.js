export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  /*
    Shorthand cheatsheet:
    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');  
    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

//  let products = [{
//     type: 'products',
//     id: 1,
//     attributes: {
//       itemName: "Calendar",
//       shortDescription: "Its a calendar",
//       description: "This is the awesomest calendar in the whole universe with complete holidays and cool quotes",
//       cost: 5,
//       avaliableQuantity: 5,
//     }
//   }]

  // this.get('/products', function(db, request){
  //   return {
  //     data: products
  //   }
  // });

  // **** PRODUCTS ****
  this.get('/products/:product_id', function(schema, request){
    return schema.products.find(request.params.product_id);
  })

  this.get('/products', function(schema){
    return schema.products.all();
  })

  this.post('/products', function(schema, request){
    let attr = JSON.parse(request.requestBody).data.attributes
    return schema.products.create(attr);
  })


  // **** CARTITEMS ****
  this.get('/cartitems/:cartitem_id', function(schema, request){
    return schema.cartitems.find(request.params.cartitem_id);
  })

  this.patch('/cartitems/:cartitem_id', function(schema, request){
    let attr = JSON.parse(request.requestBody).data.attributes
    return schema.cartitems.find(request.params.cartitem_id).update(attr)
  })

  this.del('/cartitems/:cartitem_id', function(schema, request){
    return schema.cartitems.find(request.params.cartitem_id).destroy()
  })

  this.get('/cartitems', function(schema){
    return schema.cartitems.all();
  })

  this.post('/cartitems', function(schema, request) {
    let data = JSON.parse(request.requestBody).data;
    let cartItemData = schema.cartitems.create(data.attributes);
    cartItemData.productId = data.relationships.product.data.id;
    cartItemData.save();
    return cartItemData;
  })
}
