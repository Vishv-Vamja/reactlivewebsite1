import React from "react";
import "./service.css";

function Footer() {
    // URL for the Instagram page - update this to your specific URL
    const youtubeURL = "https://www.youtube.com/@StarstreamVisualJourney/";
    const instagramURL = "https://www.instagram.com/blogs_master/";

    return (
        <footer className="w-100 foot text-center">
            <p className="peraa">©2024 VishvVamja - Empowering your future</p>
            <a href={youtubeURL} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-youtube btninsta" style={{fontSize: 48}}></i>
            </a>
            <a href={instagramURL} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram btninsta" style={{fontSize: 48}}></i>
            </a>
        </footer>
    );
}

export default Footer;
