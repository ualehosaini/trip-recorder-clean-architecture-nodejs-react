const tripService = require('../services/TripService');

class TripController {
    async getTrips(req, res) {
        try {
            const value = await tripService.getTrips();
            res.json(value);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createTrip(req, res) {
        try {
            const value = req.body;
            const newValue = await tripService.createTrip(value);
            res.status(201).json(newValue);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateTrip(req, res) {
        try {
            const { id } = req.params;
            const updatedValue = await tripService.updateTrip(id, req.body);
            if (!updatedValue) return res.status(404).json({ error: "Trip not found" });
            res.json(updatedValue);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteTrip(req, res) {
        try {
            const { id } = req.params;
            const deletedValue = await tripService.deleteTrip(id);
            if (!deletedValue) return res.status(404).json({ error: "Trip not found" });
            res.json({ message: `Trip with id ${id} deleted` });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new TripController();
