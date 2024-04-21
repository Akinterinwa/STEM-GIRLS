import React from 'react';
import './AboutComponent.css';
import MissionImg from '../../../images/image1.jpg';

const OurMission = () => {
  return (
    <>
      <div className="mission-container">
        <div className="mission-hero">
          <h1>Mission</h1>
        </div>
        <div className="mission">
          <div className="heading">
            <h4>Inspire STEM Girls' mission is to cultivate an empowering environment that encourages young girls to explore and excel in the fields of science, technology, engineering, and mathematics (STEM).</h4>
          </div>
          <div className="mission-content-1">
            <h3>THE POWER OF GIRLS</h3>
            <div className="mission-content">
              <div className="first-image">
                <img src={MissionImg} alt="" />
              </div>
              <div className="flexed-content">
                <p>By fostering a passion for these disciplines, the mission aims to bridge the gender gap and promote equality within these traditionally male-dominated fields. Here’s a breakdown of how this mission can be articulated and pursued through various initiatives:</p>
              </div>
            </div>
          </div>
          <div className="mission-content-1">
            <h3>Core Objectives of Inspire STEM Girls</h3>
            <div className="mission-content">

              <div className="flexed-content">
                <p>
                  Increase Accessibility: Ensuring that girls from all backgrounds have access to STEM education and resources. This includes providing scholarships, learning materials, and access to technology for underprivileged communities.</p>
              </div>
              <div className="first-image">
                <img src={MissionImg} alt="" />
              </div>
            </div>
          </div>
          <p>Click the gears to learn more about our approach in combining early exposure, parent engagement, and positive female role models</p>
          <div className="next-page">
            <div className="svg about-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 398.8c-11.8 5.1-23.4 9.7-34.9 13.5c16.7 33.8 31 35.7 34.9 35.7s18.1-1.9 34.9-35.7c-11.4-3.9-23.1-8.4-34.9-13.5zM446 256c33 45.2 44.3 90.9 23.6 128c-20.2 36.3-62.5 49.3-115.2 43.2c-22 52.1-55.6 84.8-98.4 84.8s-76.4-32.7-98.4-84.8c-52.7 6.1-95-6.8-115.2-43.2C21.7 346.9 33 301.2 66 256c-33-45.2-44.3-90.9-23.6-128c20.2-36.3 62.5-49.3 115.2-43.2C179.6 32.7 213.2 0 256 0s76.4 32.7 98.4 84.8c52.7-6.1 95 6.8 115.2 43.2c20.7 37.1 9.4 82.8-23.6 128zm-65.8 67.4c-1.7 14.2-3.9 28-6.7 41.2c31.8 1.4 38.6-8.7 40.2-11.7c2.3-4.2 7-17.9-11.9-48.1c-6.8 6.3-14 12.5-21.6 18.6zm-6.7-175.9c2.8 13.1 5 26.9 6.7 41.2c7.6 6.1 14.8 12.3 21.6 18.6c18.9-30.2 14.2-44 11.9-48.1c-1.6-2.9-8.4-13-40.2-11.7zM290.9 99.7C274.1 65.9 259.9 64 256 64s-18.1 1.9-34.9 35.7c11.4 3.9 23.1 8.4 34.9 13.5c11.8-5.1 23.4-9.7 34.9-13.5zm-159 88.9c1.7-14.3 3.9-28 6.7-41.2c-31.8-1.4-38.6 8.7-40.2 11.7c-2.3 4.2-7 17.9 11.9 48.1c6.8-6.3 14-12.5 21.6-18.6zM110.2 304.8C91.4 335 96 348.7 98.3 352.9c1.6 2.9 8.4 13 40.2 11.7c-2.8-13.1-5-26.9-6.7-41.2c-7.6-6.1-14.8-12.3-21.6-18.6zM336 256a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-80-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
            </div>
            <h3>Our Approach</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurMission