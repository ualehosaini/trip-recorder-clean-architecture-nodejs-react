const vehicleRepository = require('../repositories/VehicleRepository');

class VehicleService {
    async getVehicles() {
        return await vehicleRepository.getVehicles();
    }

    async getVehicle(registration) {
        if (!registration) throw new Error('Location registration must be provided');
        return await vehicleRepository.getVehicle(registration);
    }

    async createVehicle(value) {
        if (!value) throw new Error('Vehicle data must be provided');
        return await vehicleRepository.createVehicle(value);
    }

    async updateVehicle(registration, value) {
        if (!registration) throw new Error('Vehicle registration must be provided');
        if (!value) throw new Error('Vehicle data must be provided');
        return await vehicleRepository.updateVehicle(registration, value);
    }

    async deleteVehicle(registration) {
        if (!registration) throw new Error('Vehicle registration must be provided');
        return await vehicleRepository.deleteVehicle(registration);
    }
}

module.exports = new VehicleService();