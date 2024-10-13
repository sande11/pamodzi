// MainContent.js
import React from 'react';

const MainContent = ({ isCollapsed }) => {
  return (
    <div
      className="p-4 flex-grow-1"
      style={{
        marginLeft: isCollapsed ? '90px' : '250px', // Adjust according to sidebar state
        backgroundColor: '#121212', // Main content background color
        color: 'white', // Text color
        transition: 'margin-left 0.3s', // Smooth transition when collapsing
        minHeight: '100vh', // Ensure it occupies full screen height
      }}
    >
      <div className="d-flex flex-column h-100">
        <div className="flex-grow-1">
          <h2>Main Content</h2>
          <p>This is where your main content will go.</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
