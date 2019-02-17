import DS from 'ember-data';

export default DS.Model.extend({
  product: DS.belongsTo('product', {async: false}),
  quantity: DS.attr('number')
});
