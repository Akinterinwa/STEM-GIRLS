import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import LogoImg from '../images/png white.png';
import Subscribe from './Subscribe';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-content">
                <div className="inner-content">
                    <div className="left-side-content">
                        <Link to="/">
                            <img src={LogoImg} className='logo' alt="logo" />
                        </Link>
                        <p className="stand-for">STEM stands for Science, Technology, Engineering, and Math. Inspire STEM Girls is a 501(c)(3) non-profit organization.</p>
                    </div>
                    <div className="right-side-content">
                        <p className="stay-up">Stay up-to-date on our latest news</p>
                        <p className="newsletter">Sign up for our newsletter</p>
                        <div className="form">
                            <Subscribe />
                        </div>
                    </div>
                </div>
            </div>
            <div className="straight-line"></div>

            <div className="social-links">
                <div className="section-1">
                    <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'>
                        <i className='fab fa-youtube'></i>
                    </Link>
                    <Link className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'>
                        <i className='fab fa-twitter'></i>
                    </Link>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="/mission">
                        <p>About us</p>
                    </Link>
                    <Link to="/location">
                        <p> Workshop </p>
                    </Link>
                    <Link to="/contact">
                        <p> Contact</p>
                    </Link>
                    <Link to="/contact">
                        <p>Privacy Policy</p>
                    </Link>
                    <Link to="/contact">
                        <p> Terms & Conditions</p>
                    </Link>
                    <Link to="/donate">
                        <p> Support</p>
                    </Link>
                </div>
                <div className="section-2">
                    <p>©  2024 Inspire STEM Girls , All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer