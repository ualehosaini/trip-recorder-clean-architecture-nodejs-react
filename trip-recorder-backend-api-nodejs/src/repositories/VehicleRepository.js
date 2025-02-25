const Vehicle = require('../models/Vehicle');

class VehicleRepository {
    async getVehicles() {
        return await Vehicle.find();
    }

    async getVehicle(registration) {
        if (!registration) {
            throw new Error('Invalid registration');
        }
        return await Vehicle.findOne({ registration: registration });
    }


    async createVehicle(value) {
        if (!value) {
            throw new Error('Invalid vehicle data');
        }
        const newValue = new Vehicle(value);
        return await newValue.save();
    }

    async updateVehicle(registration, value) {
        if (!registration || !value) {
            throw new Error('Invalid registration or vehicle data');
        }
        const updatedValue = await Vehicle.findOneAndUpdate(
            { registration: registration },
            value,
            { new: true, runValidators: true }
        );
        return updatedValue;
    }

    async deleteVehicle(registration) {
        if (!registration) {
            throw new Error('Invalid registration');
        }
        const deletedValue = await Vehicle.findOneAndDelete({ registration: registration });
        return deletedValue;
    }
}

module.exports = new VehicleRepository();