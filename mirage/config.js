export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  let products = [
    {
      type: 'products',
      id: 1,
      attributes: {
        itemName: "Calendar",
        shortDescription: "Its a calendar",
        description: "This is the awesomest calendar in the whole universe with complete holidays and cool quotes",
        cost: 5,
        avaliableQuantity: 5,
      }
    },
    {
      type: 'products',
      id: 2,
      attributes: {
        itemName: "Iphone 📱",
        shortDescription: "Its a phone",
        description: "This is the phone which can completely burn your entire life assets in no time 😅",
        cost: 900,
        avaliableQuantity: 4,
      }  
    },
    {
      type: 'products',
      id: 3,
      attributes: {
        itemName: "Pizza",
        shortDescription: "Fresh and hot pizza",
        description: "This one pizza is enough to destroy your fitness goals 😅",
        cost: 7,
        avaliableQuantity: 14,
      }  
    },
    {
      type: 'products',
      id: 4,
      attributes: {
        itemName: "Rolex",
        shortDescription: "A shining watch",
        description: "The watch that CEOs prefers to wear😅",
        cost: 1900,
        avaliableQuantity: 23,
      }  
    }          
  ]
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');  
    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  // this.get('/products', function(db, request){
  //   return {
  //     data: products
  //   }
  // });

  this.get('/products', function(schema, request){
    // console.log(schema.products.all())
    // console.log(schema.db)
    return schema.products.all();
  })

  this.post('/products', function(schema, request){
    // console.log('trying to post');
    // console.log(schema.db)
    let attr = JSON.parse(request.requestBody).data.attributes
    return schema.products.create(attr);
  })
}
