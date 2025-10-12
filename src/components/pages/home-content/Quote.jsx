import React from 'react';
import { Link } from 'react-router-dom';
import './Quote.css';
import drAnneMarie from '../../../images/Adelusi_Oluwaseyi_928-0444-retouched.jpg';
import VideoSection from './VideoSection'; // Import the new VideoSection component

export default function QuoteSection() {
  return (
    <section className="quote-section">
      <div className="quote-section-container">
        {/* Quote Container */}
        <div className="quote-grid">
          <div className="quote-image-container">
            <img
              src={drAnneMarie}
              alt="Dr Anne-Marie Imafidon"
              className="quote-image"
            />
          </div>
          <div className="quote-text-container">
            <p className="quote-text-main">
              Dr Anne-Marie Imafidon MBE is a prodigy in every sense of the word. Aged 11, she was the youngest girl
              ever to pass A-level computing, and was just 20 years old when she received her Master's Degree in
              Mathematics and Computer Science from the University of Oxford.
            </p>
            <p className="quote-text-author">ANNE-MARIE IMAFIDON MBE</p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <VideoSection />

      <div className="quote-section-container">
        {/* Mentorship Section */}
        <div className="mentorship-grid">
          <div className="mentorship-image-container">
            <img
              src="/mentor-network-event.jpg"
              alt="Mentorship"
              className="quote-image"
            />
          </div>
          <div className="mentorship-text">
            <p className="mentorship-paragraph">
              Join us in making a difference! Become a mentor and help shape the future of STEM by empowering the next
              generation of leaders. By sharing your knowledge and experiences, you'll not only build confidence in
              young women but also grow your own network and leave a lasting legacy. Together, let's inspire, guide, and
              create opportunities for success. Take the first step towards making a meaningful impact - become a mentor
              today!
            </p>
            <Link to="/volunteer">
              <button className="mentor-button-quote">
                Become a mentor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
