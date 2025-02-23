const Driver = require('../models/Driver');

class DriverRepository {
    async getDrivers() {
        return await Driver.find();
    }

    async createDriver(value) {
        const newValue = new Driver(value);
        return await newValue.save();
    }

    async updateDriver(code, value) {
        const updatedValue = await Driver.findOneAndUpdate(
            { code },
            value,
            { new: true, runValidators: true }
        );
        return updatedValue;
    }

    async deleteDriver(code) {
        const deletedValue = await Driver.findOneAndDelete({ code });
        return deletedValue;
    }
}

module.exports = new DriverRepository();
