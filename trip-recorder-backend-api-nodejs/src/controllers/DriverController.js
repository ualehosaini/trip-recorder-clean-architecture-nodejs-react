const driverService = require('../services/DriverService');

class DriverController {
    async getDrivers(req, res) {
        try {
            const value = await driverService.getDrivers();
            res.json(value);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getDriver(req, res) {
        try {
            const { code } = req.params;
            const value = await driverService.getDriver(code);
            res.json(value);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createDriver(req, res) {
        try {
            const value = req.body;
            const newValue = await driverService.createDriver(value);
            res.status(201).json(newValue);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateDriver(req, res) {
        try {
            const { code } = req.params;
            const updatedValue = await driverService.updateDriver(code, req.body);
            if (!updatedValue) return res.status(404).json({ error: "Driver not found" });
            res.json(updatedValue);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteDriver(req, res) {
        try {
            const { code } = req.params;
            const deletedValue = await driverService.deleteDriver(code);
            if (!deletedValue) return res.status(404).json({ error: "Driver not found" });
            res.json({ message: `Driver with code ${code} deleted` });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new DriverController();
