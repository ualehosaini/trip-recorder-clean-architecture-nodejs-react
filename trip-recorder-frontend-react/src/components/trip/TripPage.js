import React, { useState } from 'react';
import TripForm from './TripForm';
import TripList from './TripList';

const TripPage = () => {
  const [selectedTripId, setSelectedTripId] = useState(null);

  const handleSave = () => {
    setSelectedTripId(null);
    window.location.reload(); // TODO: replace it with state management
  };

  const handleCancel = () => {
    setSelectedTripId(null);
  };

  return (
    <div>
      <TripForm 
        selectedTripId={selectedTripId} 
        onSave={handleSave}
        onCancel={handleCancel}
      />
      
      <TripList onEdit={(id) => {
        console.log(id);
        setSelectedTripId(id)
      }} />
    </div>
  );
};

export default TripPage;
