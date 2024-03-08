import React from 'react';
import './Focus.css';
import Svg from './Svg';
import { Link } from 'react-router-dom';


const Focus = () => {
    return (
        <>
            <div className="focus">
                <div className="focus-container">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 398.8c-11.8 5.1-23.4 9.7-34.9 13.5c16.7 33.8 31 35.7 34.9 35.7s18.1-1.9 34.9-35.7c-11.4-3.9-23.1-8.4-34.9-13.5zM446 256c33 45.2 44.3 90.9 23.6 128c-20.2 36.3-62.5 49.3-115.2 43.2c-22 52.1-55.6 84.8-98.4 84.8s-76.4-32.7-98.4-84.8c-52.7 6.1-95-6.8-115.2-43.2C21.7 346.9 33 301.2 66 256c-33-45.2-44.3-90.9-23.6-128c20.2-36.3 62.5-49.3 115.2-43.2C179.6 32.7 213.2 0 256 0s76.4 32.7 98.4 84.8c52.7-6.1 95 6.8 115.2 43.2c20.7 37.1 9.4 82.8-23.6 128zm-65.8 67.4c-1.7 14.2-3.9 28-6.7 41.2c31.8 1.4 38.6-8.7 40.2-11.7c2.3-4.2 7-17.9-11.9-48.1c-6.8 6.3-14 12.5-21.6 18.6zm-6.7-175.9c2.8 13.1 5 26.9 6.7 41.2c7.6 6.1 14.8 12.3 21.6 18.6c18.9-30.2 14.2-44 11.9-48.1c-1.6-2.9-8.4-13-40.2-11.7zM290.9 99.7C274.1 65.9 259.9 64 256 64s-18.1 1.9-34.9 35.7c11.4 3.9 23.1 8.4 34.9 13.5c11.8-5.1 23.4-9.7 34.9-13.5zm-159 88.9c1.7-14.3 3.9-28 6.7-41.2c-31.8-1.4-38.6 8.7-40.2 11.7c-2.3 4.2-7 17.9 11.9 48.1c6.8-6.3 14-12.5 21.6-18.6zM110.2 304.8C91.4 335 96 348.7 98.3 352.9c1.6 2.9 8.4 13 40.2 11.7c-2.8-13.1-5-26.9-6.7-41.2c-7.6-6.1-14.8-12.3-21.6-18.6zM336 256a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-80-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                    </div>
                    <div className="h2">Our Mission</div>
                    <p>We believe in the combined power of girls, parents, and mentors to build confidence in young girls and shape their future in STEM fields</p>
                    <Link to="/mission">
                        <p className="read">Read More <svg viewBox="0 0 74 17" width="74px" height="17px"><path d="M20.7.3l-1.3 1.3 6.7 6H0v1.8h26.1l-6.7 6 1.3 1.3 9.4-8.2z" fill="rgba(13, 156, 144, 1)"></path></svg></p>
                    </Link>
                </div>
                <div className="focus-container">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 96a96 96 0 1 1 192 0A96 96 0 1 1 320 96zM144 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C70.2 332.6 64 349.5 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM32 112C32 50.2 82.1 0 144 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S0 447.5 0 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM192 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z" /></svg>
                    </div>
                    <div className="h2">Our Approach</div>
                    <p>We believe in the combined power of girls, parents, and mentors to build confidence in young girls and shape their future in STEM fields</p>
                    <Link to="/approach">
                        <p className="read">Read More <svg viewBox="0 0 74 17" width="74px" height="17px"><path d="M20.7.3l-1.3 1.3 6.7 6H0v1.8h26.1l-6.7 6 1.3 1.3 9.4-8.2z" fill="rgba(13, 156, 144, 1)"></path></svg></p>
                    </Link>
                </div>
                <div className="focus-container">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z" /></svg>
                    </div>
                    <div className="h2">Our Team</div>
                    <p>We believe in the combined power of girls, parents, and mentors to build confidence in young girls and shape their future in STEM fields</p>
                    <Link to='/team'>
                        <p className="read">Read More <svg viewBox="0 0 74 17" width="74px" height="17px"><path d="M20.7.3l-1.3 1.3 6.7 6H0v1.8h26.1l-6.7 6 1.3 1.3 9.4-8.2z" fill="rgba(13, 156, 144, 1)"></path></svg></p>
                    </Link>
                </div>
            </div>

            <div className="location">
                <h1>To see our list of current workshop locations, <Link to='/location'><span className='color'>click here.</span></Link></h1>
                <h1>Interested in starting a STEM Like a Girl site in your community? <Link to='/start-new'><span className='color'>click here </span></Link> to learn how!</h1>
            </div>

            <Svg />
        </>
    )
}

export default Focus