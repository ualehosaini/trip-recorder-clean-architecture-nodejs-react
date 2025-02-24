const Driver = require('../models/Driver');

class DriverRepository {
    async getDrivers() {
        return await Driver.find();
    }

    async getDriver(code) {
        if (!code) {
            throw new Error('Invalid code');
        }
        return await Driver.findOne({ code });
    }

    async createDriver(value) {
        if (!value) {
            throw new Error('Invalid driver data');
        }
        const newValue = new Driver(value);
        return await newValue.save();
    }

    async updateDriver(code, value) {
        if (!code || !value) {
            throw new Error('Invalid code or driver data');
        }
        const updatedValue = await Driver.findOneAndUpdate(
            { code },
            value,
            { new: true, runValidators: true }
        );
        return updatedValue;
    }

    async deleteDriver(code) {
        if (!code) {
            throw new Error('Invalid code');
        }
        const deletedValue = await Driver.findOneAndDelete({ code });
        return deletedValue;
    }
}

module.exports = new DriverRepository();