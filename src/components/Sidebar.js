import React, { useState } from 'react';
import { FaBars, FaHome, FaSearch, FaMusic, FaHeart } from 'react-icons/fa';
import { RiRadioLine } from 'react-icons/ri';
import { BsSoundwave, BsMusicNoteList } from 'react-icons/bs';
import { MdLibraryMusic } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/Sidebar.css';
import BottomNav from './BottomNav';

const Sidebar = ({ isCollapsed, toggleSidebar, activeLink, handleActiveLink }) => {
    return (
      <div
        className="text-light sidebar p-3"
        style={{
          width: isCollapsed ? '90px' : '250px',
          transition: 'width 0.3s',
          minHeight: '100vh',
          position: 'fixed',
          backgroundColor: '#1abc9c',
        }}
      >
        {/* Logo and Toggle Button */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-light d-flex align-items-center">
            <BsSoundwave className="me-2" />
            {isCollapsed ? '' : 'Pamodzie'}
          </h2>
          <FaBars
            onClick={toggleSidebar}
            className="text-light"
            style={{ cursor: 'pointer' }}
          />
        </div>
  
        {/* Sidebar Menu */}
        <div className="MenuContainer">
          <ul className="list-unstyled">
            <p style={{ fontSize: '21px', fontWeight: 'bold', marginLeft: '-8px' }}>Menu</p>
            <li className={`p-2 ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleActiveLink('home')}>
              <a href="#" className="d-flex align-items-center text-light">
                <FaHome className="me-2" /> {isCollapsed ? '' : 'Home'}
              </a>
            </li>
            <li className={`p-2 ${activeLink === 'search' ? 'active' : ''}`} onClick={() => handleActiveLink('search')}>
              <a href="#" className="d-flex align-items-center text-light">
                <FaSearch className="me-2" /> {isCollapsed ? '' : 'Search'}
              </a>
            </li>
            <li className={`p-2 ${activeLink === 'library' ? 'active' : ''}`} onClick={() => handleActiveLink('library')}>
              <a href="#" className="d-flex align-items-center text-light">
                <MdLibraryMusic className="me-2" /> {isCollapsed ? '' : 'Your Library'}
              </a>
            </li>
            <li className={`p-2 ${activeLink === 'songs' ? 'active' : ''}`} onClick={() => handleActiveLink('songs')}>
              <a href="#" className="d-flex align-items-center text-light">
                <FaMusic className="me-2" /> {isCollapsed ? '' : 'Songs'}
              </a>
            </li>
            <li className={`p-2 ${activeLink === 'radio' ? 'active' : ''}`} onClick={() => handleActiveLink('radio')}>
              <a href="#" className="d-flex align-items-center text-light">
                <RiRadioLine className="me-2" /> {isCollapsed ? '' : 'Radio'}
              </a>
            </li>
          </ul>
        </div>
  
        {/* Playlist Section */}
        <div className="MenuContainer">
          <ul className="list-unstyled">
            <p style={{ fontSize: '21px', fontWeight: 'bold',marginLeft: '-8px' }}>
              Playlists <FaPlus style={{ color: '#F1C40F', marginLeft: '10px' }} />
            </p>
            <li className={`p-2 ${activeLink === 'favorite' ? 'active' : ''}`} onClick={() => handleActiveLink('favorite')}>
              <a href="#" className="d-flex align-items-center text-light">
                <FaHeart className="me-2" /> {isCollapsed ? '' : 'Favorite'}
              </a>
            </li>
            <li className={`p-2 ${activeLink === 'weeklyTop10' ? 'active' : ''}`} onClick={() => handleActiveLink('weeklyTop10')}>
              <a href="#" className="d-flex align-items-center text-light">
                <BsMusicNoteList className="me-2" /> {isCollapsed ? '' : 'Weekly Top 10'}
              </a>
            </li>
            <li className={`p-2 ${activeLink === 'monthly' ? 'active' : ''}`} onClick={() => handleActiveLink('monthly')}>
              <a href="#" className="d-flex align-items-center text-light">
                <BsMusicNoteList className="me-2" /> {isCollapsed ? '' : 'Monthly Top 100'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
