import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import LogoImg from '../images/png white.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-content">
                <div className="inner-content">
                    <div className="left-side-content">
                        <img src={LogoImg} className='logo' alt="logo" />
                        <p className="stand-for">STEM stands for Science, Technology, Engineering, and Math. Inspire Stem Girls is a 501(c)(3) non-profit organization.</p>
                    </div>
                    <div className="right-side-content">
                        <p className="stay-up">Stay up-to-date on our latest news</p>
                        <p className="newsletter">Sign up for our newsletter</p>
                        <div className="form">
                            <div className='email'>Enter your email address</div>
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
                    <p>Home</p>
                    <p>About us</p>
                    <p> Workshop </p>
                    <p> Contact</p>
                    <p>Privacy Policy</p>
                    <p> Terms & Conditions</p>
                    <p> Support</p>
                </div>
                <div className="section-2">
                    <p>©  2024 Inspire Stem Girls , All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer