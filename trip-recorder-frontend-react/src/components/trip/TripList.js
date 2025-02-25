import React, { useEffect, useState } from 'react';
import { getTrips, deleteTrip } from '../../services/TripService';
import '../../styles/listStyles.css';

const TripList = ({ onEdit }) => {
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    const data = await getTrips();
    setTrips(data);
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this trip?')) {
      await deleteTrip(id);
      fetchTrips();
    }
  };

  return (
    <div className='list'>
      <h2>Trips</h2>
      <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Vehicle</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {trips.map(trip => (
          <tr key={trip._id}>
            <td>{trip._id}</td>
            <td>{trip.vehicle}</td>
            <td>
              <button onClick={() => onEdit(trip._id)}>Edit</button>
              <button onClick={() => handleDelete(trip._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TripList;
