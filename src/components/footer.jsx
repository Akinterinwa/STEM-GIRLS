import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import LogoImg from '../images/png white.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our Newsletter to receive our updates
                </p>
                <p className="footer-subscription-text">
                Stay informed, stay inspired. Join our newsletter for the latest in STEM news and exclusive updates. Subscribe now!
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name='email' placeholder='Your email' className="footer-input" />
                        <button className='btn-1'>Subscribe</button>
                    </form>
                </div>
                <p className="footer-subscription-heading">
                    Click here to donate
                </p>
                <Link to='/donate'>
                <button className="btn-1 button footer-btn">
                    DONATE
                </button>
                </Link>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>
                            <img src={LogoImg} alt="logo" />
                        </Link>
                    </div>
                    <small className='website-rights'>Inspire Stem Girls is a 501(c)(3) non-profit organization  | TERMS OF USE | PRIVACY POLICY</small>
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