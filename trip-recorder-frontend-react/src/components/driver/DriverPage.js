import React, { useState } from 'react';
import DriverForm from './DriverForm';
import DriverList from './DriverList';

const DriverPage = () => {
  const [selectedDriverCode, setSelectedDriverCode] = useState(null);

  const handleSave = () => {
    setSelectedDriverCode(null);
    window.location.reload(); // TODO: replace it with state management
  };

  const handleCancel = () => {
    setSelectedDriverCode(null);
  };

  return (
    <div>
      <DriverForm 
        selectedDriverCode={selectedDriverCode} 
        onSave={handleSave}
        onCancel={handleCancel}
      />
      
      <DriverList onEdit={(code) => {
        console.log(code);
        setSelectedDriverCode(code)
      }} />
    </div>
  );
};

export default DriverPage;
