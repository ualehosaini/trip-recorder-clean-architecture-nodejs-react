const Trip = require('../models/Trip');

class TripRepository {
    async getTrips() {
        return await Trip.find();
    }

    async createTrip(value) {
        const newValue = new Trip(value);
        return await newValue.save();
    }

    async updateTrip(id, value) {
        const updatedValue = await Trip.findByIdAndUpdate(
            id,
            value,
            { new: true, runValidators: true }
        );
        return updatedValue;
    }

    async deleteTrip(id) {
        return await Trip.findByIdAndDelete(id);
    }
}

module.exports = new TripRepository();
