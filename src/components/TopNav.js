// TopNav.js
import React from 'react';
import { BsSoundwave } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/TopNav.css';

const TopNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top custom-navbar">
            <div className="container-fluid">
                <div className="top-nav d-flex align-items-center justify-content-center py-2 d-lg-none"> 
                    <h2 className="text-light d-flex align-items-center mb-0">
                        <BsSoundwave className="me-2" />
                        Pamodzie
                    </h2>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
