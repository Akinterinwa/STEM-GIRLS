import React from 'react';
import '../workshops-components/Workshop.css';
import SiteImg from '../../../images/stem-girls-img-7.jpg';

const StartNew = () => {
  return (
    <>
      <div className="startnew-hero">
        <h1>Start A New Site</h1>
      </div>
      <div className="new-site">
        <div className="site-container">
          <div className="site-image">
            <img src={SiteImg} alt="site" />
          </div>
          <div className="site-content">
            <p>Ready to excite and empower girls with knowledge and confidence in STEM? Click the button to learn how you can bring Inspire STEM Girls (ISG) to your city to encourage girls to become future problem solvers and leaders.</p>
            <div className="apply_container">
              <div className="btn-1 button">Apply to Start a Site</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StartNew