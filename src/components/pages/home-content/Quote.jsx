import React from 'react';
import './Quote.css';
import QuoteImg from "./images/Image.svg"
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Quote = () => {
  return (
    <>
      <div className="quote-container">
        <div className="quotes-img">
          <img src={QuoteImg} alt="container" />
        </div>

        <div className="quote-text">
          <div className="text-1">
            Dr Anne-Marie Imafidon MBE is a prodigy in every sense of the word. Aged 11, she was the youngest girl ever to pass A-level computing, and was just 20 years old when she received her Master’s Degree in Mathematics and Computer Science from the University of Oxford.
          </div>
          <div className="name">ANNE-MARIE IMAFIDON MBE</div>
        </div>
      </div>


      <div className="mentorship-coding">
        <div className="coding-container">
          <div className="coding-content">
            <h3>580,000 girls, women and nonbinary individuals coding worldwide</h3>
            <p>We want no girl, non-binary or transgender girl to opt out of STEM because of prejudice, too little information or lack of inspiration . We function both as a network for those who have already found their way into the heat of STEM and as an inspiration for those who have not yet found their way here. </p>
            <Link to="/donate">
              <div className="donate-button">Donate</div>
            </Link>
          </div>
          <div className="coding-img">
            <img src="/div.framer-amyu2d.svg" alt="coding" />
          </div>
        </div>
        <div className="mentorship-container">
          <div className="mentorship-image">
            <img src="/mentorship.svg" alt="mentorship" />
          </div>
          <div className="mentorship-text">
            <p>Join us in making a difference! Become a mentor and help shape the future of STEM by empowering the next generation of leaders. By sharing your knowledge and experiences, you'll not only build confidence in young women but also grow your own network and leave a lasting legacy. Together, let's inspire, guide, and create opportunities for success. Take the first step towards making a meaningful impact - become a mentor today!</p>
            <Link to="/volunteer">
              <div className="mentorship-cta">
                Become a mentor
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quote;