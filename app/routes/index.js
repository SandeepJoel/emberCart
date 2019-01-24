import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        "id": 1,
        "itemName": "Calendar",
        "shortDescription": "Its a calendar",
        "description": "This is the awesomest calendar in the whole universe with complete holidays and cool quotes",
        "cost": 5,
        "avaliableQuantity": 5,
      },
      {
        "id": 2,
        "itemName": "Iphone 📱",
        "shortDescription": "Its a phone",
        "description": "This is the phone which can completely burn your entire life assets in no time 😅",
        "cost": 900,
        "avaliableQuantity": 4,
      }      
    ]
  }
});