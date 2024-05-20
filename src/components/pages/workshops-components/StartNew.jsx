import React from 'react';
import '../workshops-components/Workshop.css';
import SiteImg from '../../../images/stem-girls-img-7.jpg';
import { Link } from 'react-router-dom';

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
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfgbWxifIhGKeFwIfcddHIAf7-IFMO_IVJZS7Pr-Zu5mZCIsA/viewform?usp=sf_link" target='_blank'>
            <div className="apply_container">
              <div className="btn-1 button">Apply to Start a Site</div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default StartNew