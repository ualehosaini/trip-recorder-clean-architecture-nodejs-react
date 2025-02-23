const mongoose = require('mongoose');

// Define the schema
const tripSchema = new mongoose.Schema({
  // Vehicle Registration
  vehicle: {
    type: String,
    required: true,
  },
  // Driver Code
  driver: {
    type: String,
    required: true
    }
  ,
  startDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  startLocation: {
    type: String,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  endLocation: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
 }
});

// Create the model
const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;