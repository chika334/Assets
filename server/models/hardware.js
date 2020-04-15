const { Schema, model } = require('mongoose');

const hardwareSchema = new Schema({
  tableHardware: [{
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

const Hardware = model('hardware', hardwareSchema);

module.exports = Hardware;
