const locationRepository = require('../repositories/LocationRepository');

class LocationService {
    async getLocations() {
        return await locationRepository.getLocations();
    }

    async getLocation(shortName) {
        if (!shortName) throw new Error('Location shortName must be provided');
        return await locationRepository.getLocation(shortName);
    }

    async createLocation(value) {
        if (!value) throw new Error('Location data must be provided');
        return await locationRepository.createLocation(value);
    }

    async updateLocation(shortName, value) {
        if (!shortName) throw new Error('Location shortName must be provided');
        if (!value) throw new Error('Location data must be provided');
        return await locationRepository.updateLocation(shortName, value);
    }

    async deleteLocation(shortName) {
        if (!shortName) throw new Error('Location shortName must be provided');
        return await locationRepository.deleteLocation(shortName);
    }
}

module.exports = new LocationService();