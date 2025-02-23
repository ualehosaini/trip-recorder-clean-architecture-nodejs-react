const driverRepository = require('../repositories/DriverRepository');

class DriverService {
    async getDrivers() {
        return await driverRepository.getDrivers();
    }

    async createDriver(value) {
        if (!value) throw new Error('Driver data must be provided');
        return await driverRepository.createDriver(value);
    }

    async updateDriver(code, value) {
        if (!code) throw new Error('Driver code must be provided');
        if (!value) throw new Error('Driver data must be provided');
        return await driverRepository.updateDriver(code, value);
    }

    async deleteDriver(code) {
        if (!code) throw new Error('Driver code must be provided');
        return await driverRepository.deleteDriver(code);
    }
}

module.exports = new DriverService();
