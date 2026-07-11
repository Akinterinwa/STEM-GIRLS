import React, { useState } from 'react';
import './VideoSection.css';
import { FaPlay } from 'react-icons/fa';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="video-section">
      <div className="video-section-container">
        <div className="video-grid">
          {/* Left Content */}
          <div className="video-content">
            <span className="video-badge">Watch Our Story</span>
            <h2 className="video-title">
              Empowering the next generation of innovators
            </h2>
            <p className="video-description">
              Discover how our STEM programs are transforming lives and breaking barriers. Watch the inspiring stories
              of young women who are shaping the future of technology, science, and innovation.
            </p>
            <div className="video-stats">
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
                <div className="stat-label">Partner Schools....</div>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div className="video-player-container">
            <div className="video-player-wrapper">
              <video
                className="video-thumbnail"
                controls={isPlaying}
                autoPlay={isPlaying}
                poster="/black-girls-confidence.jpg"
              >
                <source src="/public/inspire-stem-girls-vid2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* <img src="/public/black-girls-confidence.jpg" alt="STEM girls in action" className="video-thumbnail" /> */}

              {!isPlaying && ( 
                <div className="play-button-overlay">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="play-button"
                  >
                    <FaPlay size="1.75rem" className="play-icon" />
                  </button>
                </div>
              )}
            </div>

            <div className="deco-blob deco-blob-purple"></div>
            <div className="deco-blob deco-blob-indigo"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
