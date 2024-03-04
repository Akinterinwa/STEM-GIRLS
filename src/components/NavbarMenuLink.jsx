import React, { useState } from 'react';
import './NavbarMenu.css';
import { Link } from 'react-router-dom';
import { links } from '../data/MyLinks';

const NavbarMenuLink = () => {
    const [heading, setHeading] = useState("");
    return (
        <>
            {
                links.map(link => (
                    <div className='line'>
                        <div className='navbar-menu-heading'>
                            <h4 className='navbar-menu-heading-text' onClick={()=> { heading !== link.name ? 
                             setHeading(link.name) : setHeading('');
                             }}>
                                {link.name}
                                <span className='arrowdown'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                                </span>
                            </h4>
                            {link.submenu && (
                                <div>
                                <div className='dropdown-container'>
                                    <div className="dropdown-container-space">
                                        <div className="dropdown-container-top"></div>
                                    </div>
                                    <div className='dropdown-container-content'>
                                        {
                                            link.sublinks.map((mysublinks)=>(
                                                <div>
                                                    <h5 className='mysublinks-head'>{mysublinks.Head}</h5>
                                                    {mysublinks.sublink.map(slink=>(
                                                        <li  className='dropdownmenu-head'>
                                                            <Link to={slink.link} className='dropdownmenu-link'>{slink.name}</Link>
                                                        </li>
                                                    ))}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            ) }
                        </div>
                        {/* mobilescreen menu */}
                            <div className="">
                                <div className={`
                                    ${heading === link.name ? 'hidden-mobile' : 'hide'}
                                `}>
                                    {/* sublinks */}
                                    {
                                        link.sublinks.map((slinks) => (
                                            <div className="">
                                                <div className="">
                                                    <h3 className='mobilemenu-head'>{slinks.Head}</h3>
                                                    <div>
                                                        {slinks.sublink.map(slink=>(
                                                            <li className='mobilemenu-insidelink'>
                                                                <Link to={slink.link}>
                                                                    {slink.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                    </div>
                ))
            }
        </>
    )
}

export default NavbarMenuLink