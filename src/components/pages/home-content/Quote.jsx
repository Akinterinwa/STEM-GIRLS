import React from 'react';
import QuoteImg from "../../../images/ami-speaking.jpg";
import './Quote.css';
import Svg from './Svg';
import { Link } from 'react-router-dom';

const Quote = () => {
  return (
    <>
      <Svg />
      <div className="quotes">
        <div className="quotes-text">
          <p className='quote'>
            Dr Anne-Marie Imafidon MBE is a prodigy in every sense of the word. Aged 11, she was the youngest girl ever to pass A-level computing, and was just 20 years old when she received her Master’s Degree in Mathematics and Computer Science from the University of Oxford.
          </p>

          <div className="author">
            <svg width="36" height="7" viewBox="0 0 36 7"><path d="M0 1c5.883 0 5.883 5 11.767 5 5.883 0 5.883-5 11.767-5 5.883 0 5.883 5 11.765 5" fill="none" stroke="#43D6B9" stroke-width="2"></path></svg>
            <p>ANNE-MARIE IMAFIDON MBE</p>
          </div>
        </div>

        <div className="quotes-img">
          <img src={QuoteImg} alt="alt" />
        </div>
      </div>

      <div className="numbers">
        <p className='big-number'>580,000 girls, women and nonbinary individuals coding worldwide</p>
      </div>

      <div className="donate-line">
        <p className='donate-text'>The gender gap in tech has been getting worse, but <bold>Inspire STEM Girls</bold> is changing that. Our alumni go on to major in Computer Science at 7X the national average.</p>
        <div className="donate-button">
          <Link to='/donate'>
            <button className='btn-1'>DONATE NOW</button>
          </Link>
        </div>
      </div>
      <Svg />
    </>
  )
}

export default Quote;