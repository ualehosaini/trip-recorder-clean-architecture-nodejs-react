import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import DriverPage from './components/driver/DriverPage';
import LocationPage from './components/location/LocationPage';
import VehiclePage from './components/vehicle/VehiclePage';
import TripPage from './components/trip/TripPage';
import ReportPage from './components/reports/ReportPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/drivers" element={<DriverPage />} />
          <Route path="/locations" element={<LocationPage />} />
          <Route path="/vehicles" element={<VehiclePage />} />
          <Route path="/trips" element={<TripPage />} />
          <Route path="/reports" element={<ReportPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;