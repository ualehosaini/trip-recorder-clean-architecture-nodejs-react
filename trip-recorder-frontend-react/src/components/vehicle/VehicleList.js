import React, { useEffect, useState } from 'react';
import { getVehicles, deleteVehicle } from '../../services/VehicleService';
import '../../styles/listStyles.css';

const VehicleList = ({ onEdit }) => {
  const [vehicle, setVehicle] = useState([]);

  const fetchVehicles = async () => {
    const data = await getVehicles();
    setVehicle(data);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleDelete = async (registration) => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      await deleteVehicle(registration);
      fetchVehicles();
    }
  };

  return (
    <div className='list'>
      <h2>Vehicles</h2>
      <table>
      <thead>
        <tr>
          <th>Registration</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {vehicle.map(vehicle => (
          <tr key={vehicle._id}>
            <td>{vehicle.registration}</td>
            <td>{vehicle.description}</td>
            <td>
              <button onClick={() => onEdit(vehicle.registration)}>Edit</button>
              <button onClick={() => handleDelete(vehicle.registration)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default VehicleList;
