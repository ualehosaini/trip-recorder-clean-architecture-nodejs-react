import api from './api';

// Add a new location
export const addLocation = async (locationData) => {
    try {
        const response = await api.post('/location', locationData);
        return response.data;
    } catch (error) {
        console.error('Error adding location:', error);
        throw error;
    }
};

// Get all locations
export const getLocations = async () => {
    try {
        const response = await api.get('/location');
        return response.data;
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error;
    }
};

// Update location by shortName
export const updateLocation = async (shortName, locationData) => {
    try {
        const response = await api.put(`/location/${shortName}`, locationData);
        return response.data;
    } catch (error) {
        console.error('Error updating location:', error);
        throw error;
    }
};

// Delete location by shortName
export const deleteLocation = async (shortName) => {
    try {
        const response = await api.delete(`/location/${shortName}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting location:', error);
        throw error;
    }
};

// Get a single location by shortName
export const getLocationByShortName = async (shortName) => {
    try {
        const response = await api.get(`/location/${shortName}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching location:', error);
        throw error;
    }
};
