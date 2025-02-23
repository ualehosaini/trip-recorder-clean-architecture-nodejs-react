const mongoose = require('mongoose');

// Define the schema
const locationSchema = new mongoose.Schema({
  shortName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

// Create the model
const Location = mongoose.model('Location', locationSchema);

module.exports = Location;