import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import MainContent from './components/MainContent';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false); // Track sidebar collapse state
  const [activeLink, setActiveLink] = useState('home'); // Track the active sidebar link

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="app-container d-flex" style={{ minHeight: '100vh' }}>
      <TopNav className="top-nav" />
      
      {/* Sidebar */}
      <Sidebar 
        isCollapsed={isCollapsed} 
        toggleSidebar={toggleSidebar} 
        activeLink={activeLink} 
        handleActiveLink={handleActiveLink}
      />
      
      {/* Main Content */}
      <MainContent isCollapsed={isCollapsed} />

      <BottomNav className="bottom-nav" />
    </div>
  );
}

export default App;
