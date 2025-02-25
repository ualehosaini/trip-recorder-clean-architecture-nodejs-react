import React, { useState } from 'react';
import LocationForm from './LocationForm';
import LocationList from './LocationList';

const LocationPage = () => {
  const [selectedLocationShortName, setSelectedLocationShortName] = useState(null);

  const handleSave = () => {
    setSelectedLocationShortName(null);
    window.location.reload(); // TODO: replace it with state management
  };

  const handleCancel = () => {
    setSelectedLocationShortName(null);
  };

  return (
    <div>
      <LocationForm 
        selectedLocationShortName={selectedLocationShortName} 
        onSave={handleSave}
        onCancel={handleCancel}
      />
      
      <LocationList onEdit={(shortName) => {
        console.log(shortName);
        setSelectedLocationShortName(shortName)
      }} />
    </div>
  );
};

export default LocationPage;
