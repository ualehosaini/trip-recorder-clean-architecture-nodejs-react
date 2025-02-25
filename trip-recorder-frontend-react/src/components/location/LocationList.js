import React, { useEffect, useState } from 'react';
import { getLocations, deleteLocation } from '../../services/LocationService';
import '../../styles/listStyles.css';

const LocationList = ({ onEdit }) => {
  const [location, setLocation] = useState([]);

  const fetchLocations = async () => {
    const data = await getLocations();
    setLocation(data);
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const handleDelete = async (shortName) => {
    if (window.confirm('Are you sure you want to delete this location?')) {
      await deleteLocation(shortName);
      fetchLocations();
    }
  };

  return (
    <div className='list'>
      <h2>Locations</h2>
      <table>
      <thead>
        <tr>
          <th>Short Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {location.map(location => (
          <tr key={location._id}>
            <td>{location.shortName}</td>
            <td>{location.description}</td>
            <td>
              <button onClick={() => onEdit(location.shortName)}>Edit</button>
              <button onClick={() => handleDelete(location.shortName)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default LocationList;
