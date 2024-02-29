import React, {useState} from 'react';
import Button from './Button';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    //dropdoqn to show
    const onMouseEnter = () => {
        if(window.innerWidth < 960 ) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960 ) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    const changeBackground = () => {
        if(window.scrollY >= 300) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };
    window.addEventListener('scroll', changeBackground)

  return (
    <>
    <nav className={navbar ? 'navbar active' : 'navbar'}> 
        <Link to='/' className='navbar-logo'>
            STEM
        </Link>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    HOME
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    ABOUT
                </Link>
            </li>
            <li className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                    WORKSHOP <i className='fas fa-caret-down' />
                </Link>
                {dropdown && <Dropdown />}
            </li>
           
            <li className="nav-item border">
                <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                    GET INVOLVED
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    SIGN UP
                </Link>
            </li>
        </ul>
        <Button />
    </nav>
    </>
  )
} 

export default Navbar;