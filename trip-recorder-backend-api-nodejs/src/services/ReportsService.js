const reportsRepository = require('../repositories/ReportsRepository');

class ReportsService {
    async getVehicleWiseMillage(startDate, endDate) {
        return await reportsRepository.getVehicleWiseMillage(startDate, endDate);
    }
}

module.exports = new ReportsService();