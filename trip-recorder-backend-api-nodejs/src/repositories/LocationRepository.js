const Location = require('../models/Location');

class LocationRepository {
    async getLocations() {
        return await Location.find();
    }

    async createLocation(value) {
        const newValue = new Location(value);
        return await newValue.save();
    }

    async updateLocation(shortName, value) {
        const updatedValue = await Location.findOneAndUpdate(
            { shortName: shortName },
            value,
            { new: true, runValidators: true }
        );
        return updatedValue;
    }

    async deleteLocation(shortName) {
        const deletedValue = await Location.findOneAndDelete({ shortName: shortName });
        return deletedValue;
    }
}

module.exports = new LocationRepository();
