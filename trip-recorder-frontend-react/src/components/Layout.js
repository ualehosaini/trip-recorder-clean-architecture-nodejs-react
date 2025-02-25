import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layoutStyles.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Trip Recorder</h1>
        <nav className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/drivers">Drivers</Link></li>
            <li><Link to="/locations">Locations</Link></li>
            <li><Link to="/vehicles">Vehicles</Link></li>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </header>
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2025 Trip Recorder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;