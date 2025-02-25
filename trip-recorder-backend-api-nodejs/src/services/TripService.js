const tripRepository = require('../repositories/TripRepository');

class TripService {
    async getTrips() {
        return await tripRepository.getTrips();
    }

    async getTrip(id) {
        if (!id) throw new Error('Trip id must be provided');
        return await tripRepository.getTrip(id);
    }

    async createTrip(value) {
        if (!value) throw new Error('Trip data must be provided');
        return await tripRepository.createTrip(value);
    }

    async updateTrip(id, value) {
        if (!id) throw new Error('Trip id must be provided');
        if (!value) throw new Error('Trip data must be provided');
        return await tripRepository.updateTrip(id, value);
    }

    async deleteTrip(id) {
        if (!id) throw new Error('Trip id must be provided');
        return await tripRepository.deleteTrip(id);
    }
}

module.exports = new TripService();