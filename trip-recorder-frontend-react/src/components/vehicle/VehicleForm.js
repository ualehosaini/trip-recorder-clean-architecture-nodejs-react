import React, { useState, useEffect } from 'react';
import { addVehicle, updateVehicle, getVehicleByRegistration } from '../../services/VehicleService';
import '../../styles/formStyles.css';

const VehicleForm = ({ selectedVehicleRegistration, onSave, onCancel }) => {
  const [registration, setRegistration] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedVehicleRegistration) {
      setLoading(true);
      getVehicleByRegistration(selectedVehicleRegistration).then(vehicle => {
        setRegistration(vehicle.registration || '');
        setDescription(vehicle.description || '');
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });
    } else {
      setRegistration('');
      setDescription('');
    }
  }, [selectedVehicleRegistration]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vehicleData = { registration, description };

    try {
      if (selectedVehicleRegistration) {
        await updateVehicle(selectedVehicleRegistration, vehicleData);
      } else {
        await addVehicle(vehicleData);
      }
      onSave();
    } catch (error) {
      console.error('Error saving vehicle:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='form-container'>
        <h2>{selectedVehicleRegistration ? 'Edit Vehicle' : 'Add Vehicle'}</h2>
        <form onSubmit={handleSubmit}>
        <input required value={registration} onChange={(e) => setRegistration(e.target.value)} placeholder="Vehicle Registration" />
        <input required value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <button type="submit">{selectedVehicleRegistration ? 'Update' : 'Add'} Vehicle</button>
        <br/>
        {selectedVehicleRegistration && <button type="button" onClick={onCancel}>Cancel</button>}
        </form>
    </div>
  );
};

export default VehicleForm;