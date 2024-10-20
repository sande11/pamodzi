import React, { useState, useEffect } from "react";
import '../styles/Banner.css';
import Artistl from "../img/artistl.jpg";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaHeadphones, FaUser } from "react-icons/fa";

function Banner() {
    const banners = [
        {
            title: "Featured Artist: Lunatic",
            subtitle: "Stream the Latest Hits Now!",
            details: "10,900,098 Total Downloads | New Album: [Album Name]",
            imgSrc: Artistl
        },
        {
            title: "Get Premium Access",
            subtitle: "Unlimited Music, Ad-Free Streaming",
            details: "Sign Up Now and Enjoy 30 Days Free!",
            imgSrc: Artistl
        },
        {
            title: "New Music Friday",
            subtitle: "Discover the Latest Tracks",
            details: "Curated Playlists Updated Weekly",
            imgSrc: Artistl
        },
        {
            title: "Top Hits Playlist",
            subtitle: "The Most Played Tracks of the Week",
            details: "Over 1 Million Streams",
            imgSrc: Artistl
        },
        {
            title: "Artist Spotlight: Lunatic",
            subtitle: "Listen to the Hits That Made Them Famous",
            details: "Exclusive Interviews and More",
            imgSrc: Artistl
        }
    ];

    const [currentBannerIndex, setCurrentBannerIndex] = useState(Math.floor(Math.random() * banners.length));

    const changeBanner = () => {
        setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
    };

    useEffect(() => {
        const interval = setInterval(changeBanner, 30000);
        return () => clearInterval(interval);
    }, []);

    const currentBanner = banners[currentBannerIndex];

    return (
        <div className="banner container-fluid p-0">
            <img src={currentBanner.imgSrc} alt="Artist" className="bannerImg img-fluid" />

            <div className="content container-fluid">
                <div className="breadCrumb d-flex justify-content-between align-items-center">
                    <p>
                        <span>Home</span>
                    </p>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <FaUser size={20} style={{ color: '#ffff' }} />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="artist row">
                    <div className="col-12 col-md-8">
                        <div className="name" >
                            <h2 style={{color: '#ffff'}}>{currentBanner.title}</h2>
                        </div>
                        <p><i><FaHeadphones /></i> {currentBanner.details}</p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-md-end justify-content-start">
                        <a href="#" className="btn btn-warning">Play</a>
                    </div>
                </div>
            </div>
            <div className="bottomLayer"></div>
        </div>
    );
}

export { Banner };