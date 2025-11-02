import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import whiteLogo from '../images/white logo.png';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-top-section">
          {/* Left Side - Logo and Description */}
          <div className="footer-logo-section">
            <Link to="/">
              <img src={whiteLogo} alt="Inspire STEM Girls Logo" className="footer-logo" />
            </Link>
            <p className="footer-description">
              STEM stands for Science, Technology, Engineering, and Math. Inspire STEM Girls (ISG) is a 501(c)(3)
              non-profit organization.
            </p>
          </div>

          {/* Right Side - Newsletter Signup */}
          <div className="footer-newsletter-section">
            <div style={{ position: 'relative', height: '280px', width: '100%' }}>
              <iframe
                title='Signup form powered by Zeffy'
                style={{
                  position: 'absolute',
                  border: '0',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  width: '100%',
                  height: '100%'
                }}
                src='https://www.zeffy.com/en-US/embed/newsletter-form/sign-up-for-our-newsletter-1563'
                allowTransparency="true"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider"></div>

        {/* Social Links and Navigation */}
        <div className="footer-bottom-section">
          <div className="footer-social-nav-container">
            {/* Social Icons */}
            <div className="footer-social-icons">
              <a
                href="https://www.instagram.com/inspirestem_girls/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <FaInstagram size="1.25rem" />
              </a>
               <a
                href="https://www.linkedin.com/company/inspirestemgirls/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-icon"
              >
                <FaLinkedinIn size="1.25rem" />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="footer-nav-links">
              <Link to="/" className="footer-nav-link">Home</Link>
              <Link to="/mission" className="footer-nav-link">About us</Link>
              <Link to="/events" className="footer-nav-link">Workshop</Link>
              <Link to="/contact" className="footer-nav-link">Contact</Link>
              <Link to="/volunteer" className="footer-nav-link">Volunteer</Link>
              <Link to="/sponsors" className="footer-nav-link">Sponsors And Partners</Link>
              <Link to="/volunteer" className="footer-nav-link">Support</Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-copyright-section">
            <p className="footer-copyright-text">© 2025 Inspire STEM Girls (ISG), All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
