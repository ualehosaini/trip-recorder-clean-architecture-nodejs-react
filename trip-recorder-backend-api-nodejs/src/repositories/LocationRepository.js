const Location = require('../models/Location');

class LocationRepository {
    async getLocations() {
        return await Location.find();
    }

    async getLocation(shortName) {
        if (!shortName) {
            throw new Error('Invalid short name');
        }
        return await Location.findOne({ shortName: shortName });
    }

    async createLocation(value) {
        if (!value) {
            throw new Error('Invalid location data');
        }
        const newValue = new Location(value);
        return await newValue.save();
    }

    async updateLocation(shortName, value) {
        if (!shortName || !value) {
            throw new Error('Invalid short name or location data');
        }
        const updatedValue = await Location.findOneAndUpdate(
            { shortName: shortName },
            value,
            { new: true, runValidators: true }
        );
        return updatedValue;
    }

    async deleteLocation(shortName) {
        if (!shortName) {
            throw new Error('Invalid short name');
        }
        const deletedValue = await Location.findOneAndDelete({ shortName: shortName });
        return deletedValue;
    }
}

module.exports = new LocationRepository();