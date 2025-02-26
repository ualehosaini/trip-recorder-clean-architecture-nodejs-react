import api from './api';

export const getVehicleWiseMillageReport = async (startDate, endDate) => {
    try {
        const response = await api.get(`/reports/vehicle-wise-millage`, {
            params: { startDate, endDate }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching vehicle-wise millage report:', error);
        throw error;
    }
};