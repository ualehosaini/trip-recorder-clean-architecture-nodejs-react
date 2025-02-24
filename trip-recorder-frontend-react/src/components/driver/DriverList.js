import React, { useEffect, useState } from 'react';
import { getDrivers, deleteDriver } from '../../services/DriverService';
import '../../styles/listStyles.css';

const DriverList = ({ onEdit }) => {
  const [drivers, setDrivers] = useState([]);

  const fetchDrivers = async () => {
    const data = await getDrivers();
    setDrivers(data);
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  const handleDelete = async (code) => {
    if (window.confirm('Are you sure you want to delete this driver?')) {
      await deleteDriver(code);
      fetchDrivers();
    }
  };

  return (
    <div className='list'>
      <h2>Drivers</h2>
      <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {drivers.map(driver => (
          <tr key={driver._id}>
            <td>{driver.code}</td>
            <td>{driver.firstName}</td>
            <td>{driver.lastName}</td>
            <td>
              <button onClick={() => onEdit(driver.code)}>Edit</button>
              <button onClick={() => handleDelete(driver.code)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DriverList;
