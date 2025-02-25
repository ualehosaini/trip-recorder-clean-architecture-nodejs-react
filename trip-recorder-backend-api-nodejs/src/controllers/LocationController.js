const locationService = require('../services/LocationService');

class LocationController {
    async getLocations(req, res) {
        try {
            const value = await locationService.getLocations();
            res.json(value);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getLocation(req, res) {
        try {
            const { shortName } = req.params;
            const value = await locationService.getLocation(shortName);
            res.json(value);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createLocation(req, res) {
        try {
            const value = req.body;
            const newValue = await locationService.createLocation(value);
            res.status(201).json(newValue);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateLocation(req, res) {
        try {
            const { shortName } = req.params;
            const updatedValue = await locationService.updateLocation(shortName, req.body);
            if (!updatedValue) return res.status(404).json({ error: "Location not found" });
            res.json(updatedValue);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteLocation(req, res) {
        try {
            const { shortName } = req.params;
            const deletedValue = await locationService.deleteLocation(shortName);
            if (!deletedValue) return res.status(404).json({ error: "Location not found" });
            res.json({ message: `Location with Short name ${shortName} deleted` });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new LocationController();
