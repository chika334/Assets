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

// departmentName: {
//   type: { type: String },
//   // value: String,
//   // required: true
// },
// listOfAssets: {
//   type: { type: String },
//   // value: String,
//   // required: true
// },
// uniqueId: {
//   type: { type: String },
//   // value: String,
//   // required: true,
// }