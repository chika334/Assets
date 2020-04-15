const { Schema, model } = require('mongoose');

const softwareSchema = new Schema({
  tableSoftware: [{
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

const Software = model('software', softwareSchema);

module.exports = Software;
