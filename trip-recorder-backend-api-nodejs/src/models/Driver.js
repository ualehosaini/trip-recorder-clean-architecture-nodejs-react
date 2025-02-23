const mongoose = require('mongoose');

// Define the schema
const driverSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
},
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  }
});

// Create the model
const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;