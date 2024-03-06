import React from 'react';
import MissionImg from "../../../images/image1.jpg";
import './Quote.css';
import Svg from './Svg';

const Quote = () => {
  return (
    <>
     <Svg />
     <div className="quotes">
                <div className="quotes-text">
                    <p className='quote'>
                    “Girls Who Code has impacted my life by inspiring me to forge my own path and to be a role model for students in underrepresented groups pursuing STEM. Being part of Girls Who Code has allowed me to pursue my purpose and grow as a community leader.”
                    </p>

                    <div className="author">
                    <svg width="36" height="7" viewBox="0 0 36 7"><path d="M0 1c5.883 0 5.883 5 11.767 5 5.883 0 5.883-5 11.767-5 5.883 0 5.883 5 11.765 5" fill="none" stroke="#43D6B9" stroke-width="2"></path></svg>
                    <p>GLORIA SALAS, SUMMER PROGRAM, COLLEGE LOOPS, AND VIRTUAL MENTORING ALUMNA</p>
                    </div>
                </div>

                  <div className="quotes-img">
                    <img src={MissionImg} alt="alt" />
                </div>
            </div>

            <div className="numbers">
                <p className='big-number'>580,000 girls, women and nonbinary individuals coding worldwide</p>
            </div>

            <div className="donate-line">
                <p className='donate-text'>The gender gap in tech has been getting worse, but Girls Who Code is changing that. Our alumni go on to major in Computer Science at 7X the national average.</p>
                <div className="donate-button">
                <button className='btn-1'>DONATE NOW</button>
                </div>
            </div>
            <Svg />
    </>
  )
}

export default Quote;