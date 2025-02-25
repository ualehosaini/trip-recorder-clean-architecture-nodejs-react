import api from './api';

// Add a new vehicle
export const addVehicle = async (vehicleData) => {
    try {
        const response = await api.post('/vehicle', vehicleData);
        return response.data;
    } catch (error) {
        console.error('Error adding vehicle:', error);
        throw error;
    }
};

// Get all vehicles
export const getVehicles = async () => {
    try {
        const response = await api.get('/vehicle');
        return response.data;
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        throw error;
    }
};

// Update vehicle by registration
export const updateVehicle = async (registration, vehicleData) => {
    try {
        const response = await api.put(`/vehicle/${registration}`, vehicleData);
        return response.data;
    } catch (error) {
        console.error('Error updating vehicle:', error);
        throw error;
    }
};

// Delete vehicle by registration
export const deleteVehicle = async (registration) => {
    try {
        const response = await api.delete(`/vehicle/${registration}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting vehicle:', error);
        throw error;
    }
};

// Get a single vehicle by registration
export const getVehicleByRegistration = async (registration) => {
    try {
        const response = await api.get(`/vehicle/${registration}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching vehicle:', error);
        throw error;
    }
};
