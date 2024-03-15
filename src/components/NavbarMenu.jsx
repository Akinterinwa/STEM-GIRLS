import React, { useState, useEffect } from 'react';
import LogoImg from '../images/png white.png';
import './NavbarMenu.css';
import { Link } from 'react-router-dom';
import NavbarMenuLink from './NavbarMenuLink';

const NavbarMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 200) {
                setScrolled(true); 
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle click event and toggle the state
    const handleToggleMenu = () => {
        // Toggle the state between true and false
        setMenuOpen(!isMenuOpen);
    }

    // Function to close the mobile menu
    const closeMobileMenu = () => {
        setMenuOpen(false); // Set isMenuOpen to false to close the menu
    }

    return (
        <div className="Navbar-menu">
            <div className={`navbar-menu-container ${isScrolled ? 'scroll' : ''}`}>
                <div className="logo">
                    <Link to='/'>
                        <img src={LogoImg} alt="logo" />
                    </Link>
                    <h5 onClick={handleToggleMenu}>
                        <span className={`hidden-mobile ${isMenuOpen ? 'close-text' : 'menu-text'}`}>
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </span>
                    </h5>
                </div>
                <ul className='links-container hidden'>
                    <li>
                        <Link to="/" className='navbar-link' onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>
                    <NavbarMenuLink onClick={closeMobileMenu} />
                </ul>
                <div className="hidden">
                    <Link to="/donate">
                        <button className="btn-1">DONATE</button>
                    </Link>
                </div>
                {/* Mobile-nav */}
                <ul className={`
                    mobile-menu 
                    ${isMenuOpen ? 'mobile-show' : 'mobile-close'} 
                    hidden-mobile
                `}>
                    <li>
                        <Link to="/" className='navbar-link' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <NavbarMenuLink onClick={closeMobileMenu} />
                    <div className="mobile-button">
                        <Link to="/donate">
                            <button onClick={closeMobileMenu} className="btn-1">DONATE</button>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default NavbarMenu;
