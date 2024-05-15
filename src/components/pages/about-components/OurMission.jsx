import React from 'react';
import './AboutComponent.css';
import MissionImg1 from '../../../images/stem-girls-img-2.jpg';
import MissionImg2 from '../../../images/stem-girls-img-6.jpg';

const OurMission = () => {
  return (
    <>
      <div className="mission-container">
        <div className="mission-hero">
          <h1>Mission</h1>
        </div>
        <div className="mission">
          <div className="heading">
            <h4>Inspire STEM Girls' (ISG) mission is to cultivate an empowering environment that encourages young girls to explore and excel in the fields of science, technology, engineering, and mathematics (STEM).</h4>
          </div>
          <div className="mission-content-1">
            <h3>THE POWER OF GIRLS</h3>
            <div className="mission-content">
              <div className="first-image">
                <img src={MissionImg1} alt="" />
              </div>
              <div className="flexed-content">
                <p>By fostering a passion for these disciplines, the mission aims to bridge the gender gap and promote equality within these traditionally male-dominated fields. We believe girls are just as smart and capable of achieving success in science, technology, engineering, and math (STEM) as boys</p>
              </div>
            </div>
          </div>
          <div className="mission-content-1">
            <h3>Core Objectives of Inspire STEM Girls(ISG)</h3>
            <div className="mission-content">

              <div className="flexed-content">
                <p>
                  Increase Accessibility: Ensuring that girls from all backgrounds have access to STEM education and resources. This includes providing scholarships, learning materials, and access to technology for underprivileged communities.</p>
              </div>
              <div className="first-image">
                <img src={MissionImg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurMission