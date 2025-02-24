import React, { useState, useEffect } from 'react';
import { addDriver, updateDriver, getDriverByCode } from '../../services/DriverService';
import '../../styles/formStyles.css';

const DriverForm = ({ selectedDriverCode, onSave, onCancel }) => {
  const [code, setCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedDriverCode) {
      setLoading(true);
      getDriverByCode(selectedDriverCode).then(driver => {
        setCode(driver.code || '');
        setFirstName(driver.firstName || '');
        setLastName(driver.lastName || '');
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });
    } else {
      setCode('');
      setFirstName('');
      setLastName('');
    }
  }, [selectedDriverCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const driverData = { code, firstName, lastName };

    try {
      if (selectedDriverCode) {
        await updateDriver(selectedDriverCode, driverData);
      } else {
        await addDriver(driverData);
      }
      onSave();
    } catch (error) {
      console.error('Error saving driver:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='form-container'>
        <h2>{selectedDriverCode ? 'Edit Driver' : 'Add Driver'}</h2>
        <form onSubmit={handleSubmit}>
        <input required value={code} onChange={(e) => setCode(e.target.value)} placeholder="Driver Code" />
        <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
        <input required value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
        <button type="submit">{selectedDriverCode ? 'Update' : 'Add'} Driver</button>
        <br/>
        {selectedDriverCode && <button type="button" onClick={onCancel}>Cancel</button>}
        </form>
    </div>
  );
};

export default DriverForm;