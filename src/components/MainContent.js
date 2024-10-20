// MainContent.js
import React from 'react';
import '../styles/Maincontent.css';
import { Banner } from './Banner';

const MainContent = ({ isCollapsed }) => {
  return (
    <main class="mt-5 pt-3 main">
    <div class="container-fluid">
        <div class="row">
            {/* <div class="col-md-12 fw-bold fs-3 text-dark">Dashboard</div> */}
            <Banner/>

        </div>

    </div>
  </main>
  );
};

export default MainContent;
