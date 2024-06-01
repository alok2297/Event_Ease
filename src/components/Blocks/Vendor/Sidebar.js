import React from 'react';
import "./Sidebar.css"
const Sidebar = ({ setPage, selectedPage }) => {
  return (
    <div className="sidebar">
      <ul>
        <li
          className={selectedPage === 'information' ? 'active' : ''}
          onClick={() => setPage('information')}
        >
          Information
        </li>
        <li
          className={selectedPage === 'projects' ? 'active' : ''}
          onClick={() => setPage('projects')}
        >
          Photos
        </li>
        <li
          className={selectedPage === 'menu' ? 'active' : ''}
          onClick={() => setPage('menu')}
        >
          Menu
        </li>
        <li
          className={selectedPage === 'banquets' ? 'active' : ''}
          onClick={() => setPage('banquets')}
        >
          Banquets
        </li>
        <li
          className={selectedPage === 'bookings' ? 'active' : ''}
          onClick={() => setPage('bookings')}
        >
          Bookings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
