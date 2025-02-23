const vehicleService = require('../services/VehicleService');

class VehicleController {
    async getVehicles(req, res) {
        try {
            const value = await vehicleService.getVehicles();
            res.json(value);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createVehicle(req, res) {
        try {
            const value = req.body;
            const newValue = await vehicleService.createVehicle(value);
            res.status(201).json(newValue);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateVehicle(req, res) {
        try {
            const { registration } = req.params;
            const updatedValue = await vehicleService.updateVehicle(registration, req.body);
            if (!updatedValue) return res.status(404).json({ error: "Vehicle not found" });
            res.json(updatedValue);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteVehicle(req, res) {
        try {
            const { registration } = req.params;
            const deletedValue = await vehicleService.deleteVehicle(registration);
            if (!deletedValue) return res.status(404).json({ error: "Vehicle not found" });
            res.json({ message: `Vehicle with registration ${registration} deleted` });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new VehicleController();
