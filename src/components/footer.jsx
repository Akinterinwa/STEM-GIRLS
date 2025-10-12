import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import whiteLogo from '../images/png white.png';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

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
            <p className="footer-newsletter-heading">Stay up-to-date on our latest news</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScH4hcoLfynQBUJ_PYm85a7Oqy87th9myU7_1_9OlR34UrYCw/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="newsletter-button"
            >
              Sign up for our newsletter
            </a>
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
                href="https://www.facebook.com/inspirestemgirls"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <FaFacebook size="1.25rem" />
              </a>
              <a
                href="https://www.instagram.com/inspirestemgirls"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <FaInstagram size="1.25rem" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCZT0e6FzJZJZJZJZJZJZJZJ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="social-icon"
              >
                <FaYoutube size="1.25rem" />
              </a>
              <a
                href="https://www.twitter.com/inspirestemgirls"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-icon"
              >
                <FaTwitter size="1.25rem" />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="footer-nav-links">
              <Link to="/" className="footer-nav-link">Home</Link>
              <Link to="/mission" className="footer-nav-link">About us</Link>
              <Link to="/location" className="footer-nav-link">Workshop</Link>
              <Link to="/contact" className="footer-nav-link">Contact</Link>
              <Link to="/privacy" className="footer-nav-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-nav-link">Terms & Conditions</Link>
              <Link to="/donate" className="footer-nav-link">Support</Link>
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
