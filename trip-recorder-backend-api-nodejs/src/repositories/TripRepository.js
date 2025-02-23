const Trip = require('../models/Trip');

class TripRepository {
    async getTrips() {
        return await Trip.find();
    }

    async createTrip(value) {
        if (!value) {
            throw new Error('Invalid trip data');
        }
        const newValue = new Trip(value);
        return await newValue.save();
    }

    async updateTrip(id, value) {
        if (!id || !value) {
            throw new Error('Invalid id or trip data');
        }
        const updatedValue = await Trip.findByIdAndUpdate(
            id,
            value,
            { new: true, runValidators: true }
        );
        return updatedValue;
    }

    async deleteTrip(id) {
        if (!id) {
            throw new Error('Invalid id');
        }
        return await Trip.findByIdAndDelete(id);
    }
}

module.exports = new TripRepository();