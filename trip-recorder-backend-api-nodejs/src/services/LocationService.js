const locationRepository = require('../repositories/LocationRepository');

class LocationService {
    async getLocations() {
        return await locationRepository.getLocations();
    }

    async createLocation(value) {
        if (!value) throw new Error('Location data must be provided');
        return await locationRepository.createLocation(value);
    }

    async updateLocation(code, value) {
        if (!code) throw new Error('Location code must be provided');
        if (!value) throw new Error('Location data must be provided');
        return await locationRepository.updateLocation(code, value);
    }

    async deleteLocation(code) {
        if (!code) throw new Error('Location code must be provided');
        return await locationRepository.deleteLocation(code);
    }
}

module.exports = new LocationService();