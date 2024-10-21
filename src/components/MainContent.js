// MainContent.js
import React from 'react';
import '../styles/Maincontent.css';
import { Banner } from './Banner';
import TopAlbums from './TopAlbums';
import TopArtists from './TopArtists';


const MainContent = ({ isCollapsed }) => {
  return (
    <main class="mt-5 pt-3 main">
    <div class="content container-fluid">
        <div class="row">
            {/* <div class="col-md-12 fw-bold fs-3 text-dark">Dashboard</div> */}
            <Banner/>
        </div>
        <div class='homecontent container-fluid'>
          <TopAlbums/>
        </div>
        <div class='homecontent container-fluid'>
          <TopArtists/>
        </div>
    </div>
  </main>
  );
};

export default MainContent;
