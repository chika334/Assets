const { Schema, model } = require('mongoose');

const ItemSchema = new Schema({
  tableContent: [{
    departmentName: {
      type: String
    },
    listOfAssets: {
      type: String
    },
    uniqueId: {
      type: String
    }
  }]
});

const Item = model('item', ItemSchema);

module.exports = Item;
