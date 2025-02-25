import React, { useState, useEffect } from 'react';
import { addTrip, updateTrip, getTripById } from '../../services/TripService';
import '../../styles/formStyles.css';

const TripForm = ({ selectedTripId, onSave, onCancel }) => {
  const [vehicle, setVehicle] = useState('');
  const [driver, setDriver] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [startLocation, setStartLocation] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [distance, setDistance] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedTripId) {
      setLoading(true);
      getTripById(selectedTripId).then(trip => {
        setVehicle(trip.vehicle || '');
        setDriver(trip.driver || '');
        setStartDate(trip.startDate || '');
        setStartTime(trip.startTime || '');
        setStartLocation(trip.startLocation || '');
        setEndDate(trip.endDate || '');
        setEndTime(trip.endTime || '');
        setEndLocation(trip.endLocation || '');
        setDistance(trip.distance || '');
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });
    } else {
      setVehicle('');
      setDriver('');
      setStartDate('');
      setStartTime('');
      setStartLocation('');
      setEndDate('');
      setEndTime('');
      setEndLocation('');
      setDistance('');
    }
  }, [selectedTripId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tripData = { vehicle, driver, startDate, startTime, startLocation, endDate, endTime, endLocation, distance };

    try {
      if (selectedTripId) {
        await updateTrip(selectedTripId, tripData);
      } else {
        await addTrip(tripData);
      }
      onSave();
    } catch (error) {
      console.error('Error saving trip:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='form-container'>
      <h2>{selectedTripId ? 'Edit Trip' : 'Add Trip'}</h2>
      <form onSubmit={handleSubmit}>
        <input required value={vehicle} onChange={(e) => setVehicle(e.target.value)} placeholder="Vehicle" />
        <input required value={driver} onChange={(e) => setDriver(e.target.value)} placeholder="Driver" />
        <input required value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
        <input required value={startTime} onChange={(e) => setStartTime(e.target.value)} placeholder="Start Time" />
        <input required value={startLocation} onChange={(e) => setStartLocation(e.target.value)} placeholder="Start Location" />
        <input required value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
        <input required value={endTime} onChange={(e) => setEndTime(e.target.value)} placeholder="End Time" />
        <input required value={endLocation} onChange={(e) => setEndLocation(e.target.value)} placeholder="End Location" />
        <input required value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Distance" />
        <button type="submit">{selectedTripId ? 'Update' : 'Add'} Trip</button>
        {selectedTripId && <button type="button" onClick={onCancel}>Cancel</button>}
      </form>
    </div>
  );
};

export default TripForm;