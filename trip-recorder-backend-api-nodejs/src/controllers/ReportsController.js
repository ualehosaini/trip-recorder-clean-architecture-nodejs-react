const reportsService = require('../services/ReportsService');

class ReportsController {
    async getVehicleWiseMillage(req, res) {
        try {
            const value = await reportsService.getVehicleWiseMillage(req.startDate, req.endDate);
            res.json(value);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ReportsController();
