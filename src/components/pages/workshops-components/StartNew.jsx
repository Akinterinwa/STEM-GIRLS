import React from 'react';
import '../workshops-components/Workshop.css';
import SiteImg from '../../../images/image1.jpg';

const StartNew = () => {
  return (
    <>
        <div className="startnew-hero">
            <h1>Start A New Location</h1>
        </div>
        <div className="new-site">
          <div className="site-container">
            <div className="site-image">
              <img src={SiteImg} alt="site" />
            </div>
            <div className="site-content">
              <p>Ready to excite and empower girls with knowledge and confidence in STEM? Explore this page to learn how you can bring STEM Like a Girl to your city to encourage girls to become future problem solvers and leaders.</p>
              <div className="btn-1 button">Apply to Start a Site</div>
              <div className="btn-1 button">Site Recruitment Package</div>
            </div>
          </div>
          <div className="responsibility">
            <h1>Site Leader Responsibilities</h1>
            <ul>
              <li>Inspire a group of girls in your community with the awesome potential of STEM.</li>
              <li>Act as the main contact for STEM Like a Girl participants, volunteers, and donors in your city and STEM Like a Girl chapter planning before and throughout the program.</li>
              <li>Act as the main contact for STEM Like a Girl participants, volunteers, and donors in your city and STEM Like a Girl chapter planning before and throughout the program.</li>
              <li>Act as the main contact for STEM Like a Girl participants, volunteers, and donors in your city and STEM Like a Girl chapter planning before and throughout the program.</li>
              <li>Act as the main contact for STEM Like a Girl participants, volunteers, and donors in your city and STEM Like a Girl chapter planning before and throughout the program.</li>
              <li>Act as the main contact for STEM Like a Girl participants, volunteers, and donors in your city and STEM Like a Girl chapter planning before and throughout the program.</li>
              <li>Act as the main contact for STEM Like a Girl participants, volunteers, and donors in your city and STEM Like a Girl chapter planning before and throughout the program.</li>
            </ul>
            
            <div className="double-image">
                <div className="image-1">
                  <img src={SiteImg} alt="site" />
                </div>
                <div className="image-1">
                  <img src={SiteImg} alt="site" />
                </div>
            </div>
            <div className="btn-1 button">Apply To Start A Site</div>
          </div>
        </div>
    </>
  )
}

export default StartNew