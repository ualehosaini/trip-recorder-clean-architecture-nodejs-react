import api from './api';

// Add a new trip
export const addTrip = async (tripData) => {
    try {
        const response = await api.post('/trip', tripData);
        return response.data;
    } catch (error) {
        console.error('Error adding trip:', error);
        throw error;
    }
};

// Get all trips
export const getTrips = async () => {
    try {
        const response = await api.get('/trip');
        return response.data;
    } catch (error) {
        console.error('Error fetching trips:', error);
        throw error;
    }
};

// Update trip by id
export const updateTrip = async (id, tripData) => {
    try {
        const response = await api.put(`/trip/${id}`, tripData);
        return response.data;
    } catch (error) {
        console.error('Error updating trip:', error);
        throw error;
    }
};

// Delete trip by id
export const deleteTrip = async (id) => {
    try {
        const response = await api.delete(`/trip/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting trip:', error);
        throw error;
    }
};

// Get a single trip by id
export const getTripById = async (id) => {
    try {
        const response = await api.get(`/trip/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching trip:', error);
        throw error;
    }
};
