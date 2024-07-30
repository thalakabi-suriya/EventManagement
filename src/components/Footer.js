import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
        <div className="footer-copy">
          <p>© {new Date().getFullYear()} Your Event Management Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
