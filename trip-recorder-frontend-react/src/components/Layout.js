import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/layoutStyles.css';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="layout">
      <header className="header">
        <div></div>
        <nav className="menu">
          <div className="avatar">
            <img src="/static/sample-user-av.jfif" alt="User Avatar" />
            <div className="dropdown-content">
              <Link to="/login">Login</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </div>
        </nav>
      </header>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button onClick={toggleSidebar} className="menu-button">
          ☰
        </button>
        <ul>
          <li>
            <Link to="/">
              <span className="icon">🏠</span>
              {sidebarOpen && <span>Home</span>}
            </Link>
          </li>
          <li>
            <Link to="/drivers">
              <span className="icon">🚗</span>
              {sidebarOpen && <span>Drivers</span>}
            </Link>
          </li>
          <li>
            <Link to="/locations">
              <span className="icon">📍</span>
              {sidebarOpen && <span>Locations</span>}
            </Link>
          </li>
          <li>
            <Link to="/vehicles">
              <span className="icon">🚙</span>
              {sidebarOpen && <span>Vehicles</span>}
            </Link>
          </li>
          <li>
            <Link to="/trips">
              <span className="icon">🛣️</span>
              {sidebarOpen && <span>Trips</span>}
            </Link>
          </li>
          <li>
            <Link to="/reports">
              <span className="icon">📊</span>
              {sidebarOpen && <span>Reports</span>}
            </Link>
          </li>
        </ul>
      </div>
      <main className={`content ${sidebarOpen ? 'shifted' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;