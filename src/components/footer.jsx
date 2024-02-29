import React from 'react'
import Button from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our Newsletter to receive our updates
                </p>
                <p className="footer-subscription-text">
                Our Weekly Newsletter is a collection of the latest and greatest from Girls Who Code – top tech stories, real talk from our CEO, and news about young women changing the world.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name='email' placeholder='Your email' className="footer-input" />
                        <button>Subscribe</button>
                    </form>
                </div>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>
                            STEM <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>STEM @ 2024</small>
                    <div className="social-icons">
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
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer