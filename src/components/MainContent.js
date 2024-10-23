import React, { useState, useEffect } from 'react';
import '../styles/Maincontent.css';
import { Banner } from './Banner';
import TopAlbums from './TopAlbums';
import TopArtists from './TopArtists';

const MainContent = ({ isCollapsed }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Dynamically calculate the width based on sidebar state and screen size
  const contentWidth = isCollapsed
    ? 'calc(100% - 90px)'  // When sidebar is collapsed
    : windowWidth <= 768    // Check if the screen is small (mobile)
      ? '100%'              // No sidebar on small screens
      : 'calc(100% - 250px)'; // Normal expanded sidebar width on large screens

  return (
    <div className="mainContainer" style={{ width: contentWidth }}>
      <Banner />
      <div className="homecontent container-fluid">
        <TopAlbums />
      </div>
      <div className="homecontent container-fluid">
        <TopArtists />
      </div>
    </div>
  );
};

export default MainContent;
