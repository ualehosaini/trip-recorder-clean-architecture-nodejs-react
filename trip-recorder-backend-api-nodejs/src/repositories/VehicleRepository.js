const Vehicle = require('../models/Vehicle');

class VehicleRepository {
    async getVehicles() {
        return await Vehicle.find();
    }

    async createVehicle(value) {
        const newValue = new Vehicle(value);
        return await newValue.save();
    }

    async updateVehicle(registration, value) {
        const updatedValue = await Vehicle.findOneAndUpdate(
            { registration: registration },
            value,
            { new: true, runValidators: true }
        );
        return updatedValue;
    }

    async deleteVehicle(registration) {
        const deletedValue = await Vehicle.findOneAndDelete({ registration: registration });
        return deletedValue;
    }
}

module.exports = new VehicleRepository();