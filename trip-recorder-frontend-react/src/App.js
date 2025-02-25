import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import DriverPage from './components/driver/DriverPage';
// Import other pages as needed

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/drivers" element={<DriverPage />} />
          {/* Add other routes here */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;