const vehicleRepository = require('../repositories/VehicleRepository');

class VehicleService {
    async getVehicles() {
        return await vehicleRepository.getVehicles();
    }

    async createVehicle(value) {
        if (!value) throw new Error('Vehicle data must be provided');
        return await vehicleRepository.createVehicle(value);
    }

    async updateVehicle(code, value) {
        if (!code) throw new Error('Vehicle code must be provided');
        if (!value) throw new Error('Vehicle data must be provided');
        return await vehicleRepository.updateVehicle(code, value);
    }

    async deleteVehicle(code) {
        if (!code) throw new Error('Vehicle code must be provided');
        return await vehicleRepository.deleteVehicle(code);
    }
}

module.exports = new VehicleService();