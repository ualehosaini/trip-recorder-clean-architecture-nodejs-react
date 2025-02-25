import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import DriverPage from './components/driver/DriverPage';
import LocationPage from './components/location/LocationPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/drivers" element={<DriverPage />} />
          <Route path="/locations" element={<LocationPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;