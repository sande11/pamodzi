// BottomNav.js
import React from 'react';
import { FaHome, FaSearch, FaMusic, FaHeart } from 'react-icons/fa';
import { RiRadioLine } from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/BottomNav.css';

const BottomNav = ({ activeLink, handleActiveLink }) => {
    return (
        <div className="bottom-nav d-flex justify-content-around align-items-center d-lg-none"> {/* Hide on large screens */}
            <FaHome className={`nav-icon ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleActiveLink('home')} />
            <FaSearch className={`nav-icon ${activeLink === 'search' ? 'active' : ''}`} onClick={() => handleActiveLink('search')} />
            <FaMusic className={`nav-icon ${activeLink === 'songs' ? 'active' : ''}`} onClick={() => handleActiveLink('songs')} />
            <FaHeart className={`nav-icon ${activeLink === 'favorite' ? 'active' : ''}`} onClick={() => handleActiveLink('favorite')} />
            <RiRadioLine className={`nav-icon ${activeLink === 'radio' ? 'active' : ''}`} onClick={() => handleActiveLink('radio')} />
        </div>
    );
};

export default BottomNav;
