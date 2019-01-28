import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  itemName() {
    return faker.commerce.productName()
  },

  shortDescription(){
    return faker.hacker.phrase()
  },

  description(){
    return faker.lorem.sentence()
  },

  cost(){
    return faker.random.number({ 'min': 3, 'max': 25})
  },

  avaliableQuantity(){
    return faker.random.number({ 'min': 0, 'max': 10})
  }
});
