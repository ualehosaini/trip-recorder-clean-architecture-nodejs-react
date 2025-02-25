import React, { useState } from 'react';
import VehicleForm from './VehicleForm';
import VehicleList from './VehicleList';

const VehiclePage = () => {
  const [selectedVehicleRegistration, setSelectedVehicleRegistration] = useState(null);

  const handleSave = () => {
    setSelectedVehicleRegistration(null);
    window.location.reload(); // TODO: replace it with state management
  };

  const handleCancel = () => {
    setSelectedVehicleRegistration(null);
  };

  return (
    <div>
      <VehicleForm 
        selectedVehicleRegistration={selectedVehicleRegistration} 
        onSave={handleSave}
        onCancel={handleCancel}
      />
      
      <VehicleList onEdit={(registration) => {
        console.log(registration);
        setSelectedVehicleRegistration(registration)
      }} />
    </div>
  );
};

export default VehiclePage;
