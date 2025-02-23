const reportsService = require('../services/ReportsService');

class ReportsController {
    async getVehicleWiseMillage(req, res) {
        try {
            const { startDate, endDate } = req.query;
            const value = await reportsService.getVehicleWiseMillage(startDate, endDate);
            res.json(value);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ReportsController();