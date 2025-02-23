const mongoose = require('mongoose');

// Define the schema
const locationSchema = new mongoose.Schema({
  registration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

// Create the model
const Vehicle = mongoose.model('Vehicle', locationSchema);

module.exports = Vehicle;