import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import './Quote.css';
import founderImage from '../../../images/Adelusi_Oluwaseyi_928-0444-retouched.jpg';

const quotes = [
  "Every girl deserves the opportunity to excel in STEM",
  "Innovation knows no gender",
  "Empowerment through education",
  "Breaking barriers, building futures",
  "Diversity drives excellence",
  "Together, we inspire change",
];

function FounderQuoteSection() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="founder-quote-section">
      <div className="founder-quote-container">
        <div className="founder-quote-grid">
          <div className="founder-image-wrapper">
            <div className="founder-image-container">
              <img src={founderImage} alt="Founder Oluwaseyi Adelusi" className="founder-image" />
            </div>
          </div>
          <div className="animated-quote-container">
            <div className="quote-content">
              <p className="vision-text">Founder's Vision</p>
              <div className="quote-animation-wrapper">
                <p key={currentQuote} className="quote-text">
                  "{quotes[currentQuote]}"
                </p>
              </div>
            </div>
            <div className="quote-indicators">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`indicator-button ${index === currentQuote ? 'active' : ''}`}
                  aria-label={`Go to quote ${index + 1}`}
                />
              ))}
            </div>
            <p className="founder-name">— Oluwaseyi Adelusi, Founder & President of Inspire STEM Girls</p>
            <Link to="/about" className="learn-more-button">
              Learn More About Oluwaseyi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-grid">
          <div className="video-content-left">
            <div className="video-tag">
              <span className="tag-text">Watch Our Story</span>
            </div>
            <h2 className="video-heading">
              Empowering the next generation of innovators
            </h2>
            <p className="video-description">
              Discover how our STEM programs are transforming lives and breaking barriers. Watch the inspiring stories
              of young women who are shaping the future of technology, science, and innovation.
            </p>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Girls Empowered</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">College Acceptance</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Partner Schools</div>
              </div>
            </div>
          </div>

          <div className="video-content-right">
            <div className="video-player-wrapper">
              <img src="/diverse-group-of-young-women-working-on-stem-proje.jpg" alt="STEM girls in action" className="video-thumbnail" />
              {!isPlaying && (
                <div className="play-button-overlay">
                  <button onClick={() => setIsPlaying(true)} className="play-button">
                    <Play className="play-icon" fill="currentColor" />
                  </button>
                </div>
              )}
            </div>
            <div className="decorative-blur-1"></div>
            <div className="decorative-blur-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function QuoteAndVideo() {
  return (
    <>
      <FounderQuoteSection />
      <VideoSection />
    </>
  );
}
