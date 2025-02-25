import React, { useState, useEffect } from 'react';
import { addLocation, updateLocation, getLocationByShortName } from '../../services/LocationService';
import '../../styles/formStyles.css';

const LocationForm = ({ selectedLocationShortName, onSave, onCancel }) => {
  const [shortName, setShortName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedLocationShortName) {
      setLoading(true);
      getLocationByShortName(selectedLocationShortName).then(location => {
        setShortName(location.shortName || '');
        setDescription(location.description || '');
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });
    } else {
      setShortName('');
      setDescription('');
    }
  }, [selectedLocationShortName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const locationData = { shortName, description };

    try {
      if (selectedLocationShortName) {
        await updateLocation(selectedLocationShortName, locationData);
      } else {
        await addLocation(locationData);
      }
      onSave();
    } catch (error) {
      console.error('Error saving location:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='form-container'>
        <h2>{selectedLocationShortName ? 'Edit Location' : 'Add Location'}</h2>
        <form onSubmit={handleSubmit}>
        <input required value={shortName} onChange={(e) => setShortName(e.target.value)} placeholder="Location ShortName" />
        <input required value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <button type="submit">{selectedLocationShortName ? 'Update' : 'Add'} Location</button>
        <br/>
        {selectedLocationShortName && <button type="button" onClick={onCancel}>Cancel</button>}
        </form>
    </div>
  );
};

export default LocationForm;