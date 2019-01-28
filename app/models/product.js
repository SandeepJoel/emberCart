import DS from 'ember-data';

export default DS.Model.extend({
  itemName: DS.attr('string'),
  shortDescription: DS.attr('string'),
  description: DS.attr('string'),
  cost: DS.attr('number'),
  avaliableQuantity: DS.attr('number') 
});
