// src/components/Navbar.js

import React from 'react';
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    Your Logo Here
                </a>
                <div className="navbar-links">
                    <a href="/" className="navbar-link">
                        Home
                    </a>
                    <a href="/about" className="navbar-link">
                        About
                    </a>
                    <a href="/tutorials" className="navbar-link">
                        Tutorials
                    </a>
                    <a href="/contact" className="navbar-link">
                        Contact
                    </a>
                </div>
                <div className="navbar-buttons">
                    <a href="/signin" className="navbar-button">
                        Sign In
                    </a>
                    <a href="/signup" className="navbar-button">
                        Sign Up
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
