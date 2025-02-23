const tripRepository = require('../repositories/TripRepository');

class TripService {
    async getTrips() {
        return await tripRepository.getTrips();
    }

    async createTrip(value) {
        if (!value) throw new Error('Trip data must be provided');
        return await tripRepository.createTrip(value);
    }

    async updateTrip(code, value) {
        if (!code) throw new Error('Trip code must be provided');
        if (!value) throw new Error('Trip data must be provided');
        return await tripRepository.updateTrip(code, value);
    }

    async deleteTrip(code) {
        if (!code) throw new Error('Trip code must be provided');
        return await tripRepository.deleteTrip(code);
    }
}

module.exports = new TripService();