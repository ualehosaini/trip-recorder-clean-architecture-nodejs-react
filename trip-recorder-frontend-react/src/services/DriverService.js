import api from './api';

// Add a new driver
export const addDriver = async (driverData) => {
    try {
        const response = await api.post('/driver', driverData);
        return response.data;
    } catch (error) {
        console.error('Error adding driver:', error);
        throw error;
    }
};

// Get all drivers
export const getDrivers = async () => {
    try {
        const response = await api.get('/driver');
        return response.data;
    } catch (error) {
        console.error('Error fetching drivers:', error);
        throw error;
    }
};

// Update driver by code
export const updateDriver = async (code, driverData) => {
    try {
        const response = await api.put(`/driver/${code}`, driverData);
        return response.data;
    } catch (error) {
        console.error('Error updating driver:', error);
        throw error;
    }
};

// Delete driver by code
export const deleteDriver = async (code) => {
    try {
        const response = await api.delete(`/driver/${code}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting driver:', error);
        throw error;
    }
};

// Get a single driver by code
export const getDriverByCode = async (code) => {
    try {
        const response = await api.get(`/driver/${code}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching driver:', error);
        throw error;
    }
};
