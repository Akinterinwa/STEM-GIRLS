import { Sparkles, Users, Lightbulb } from "lucide-react";
import "./Vision.css";
import { Link } from "react-router-dom";

export default function VisionPage() {
  return (
    <div className="vision-page">
      {/* Hero Section */}
      <section className="vision-hero">
        <div className="vision-hero-background" />
        <div className="vision-hero-overlay" />

        <div className="vision-hero-content">
          <h1 className="vision-hero-title">Our Approach</h1>
          <p className="vision-hero-subtitle">
            A world where every girl has the opportunity, encouragement, and resources to pursue a career in STEM.
          </p>
          <div className="vision-hero-text">
            We strive to break down barriers and change societal expectations, ensuring that girls can lead and innovate
            in science, technology, engineering, and mathematics, contributing to a diverse, balanced, and advanced
            global community.
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-indicator-outer">
            <div className="scroll-indicator-inner" />
          </div>
        </div>
      </section>

      {/* Career Guidance Section */}
      <section className="vision-section purple-bg">
        <div className="vision-section-container">
          <div className="vision-grid">
            <div className="vision-grid-item-image">
              <div className="vision-image-container">
                <img
                  src="/black-girls-career-guidance.jpg"
                  alt="Career guidance and awareness"
                  className="vision-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="vision-grid-item-text">
              <div className="vision-badge">
                <Sparkles className="vision-badge-icon" />
                <span className="vision-badge-text">Career Guidance</span>
              </div>
              <h2 className="vision-title">Career Guidance and Awareness</h2>
              <p className="vision-description">
                Educating girls about the vast opportunities in STEM careers. This involves bringing in guest speakers,
                organizing field trips to tech companies and laboratories, and providing early career counseling.
              </p>
              <div className="vision-list">
                <div className="vision-list-item">
                  <div className="vision-list-icon" />
                  <p className="vision-list-text">Guest speakers from leading tech companies</p>
                </div>
                <div className="vision-list-item">
                  <div className="vision-list-icon" />
                  <p className="vision-list-text">Field trips to laboratories and innovation centers</p>
                </div>
                <div className="vision-list-item">
                  <div className="vision-list-icon" />
                  <p className="vision-list-text">Early career counseling and mentorship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Building Section */}
      <section className="vision-section white-bg">
        <div className="vision-section-container">
          <div className="vision-grid">
            <div className="vision-grid-item-text">
              <div className="vision-badge indigo-bg">
                <Users className="vision-badge-icon" />
                <span className="vision-badge-text">Community</span>
              </div>
              <h2 className="vision-title">Community Building</h2>
              <p className="vision-description">
                Creating a supportive community where girls can share their experiences, challenges, and successes. This
                could be facilitated through online platforms, clubs, and annual conferences that enable networking and
                camaraderie.
              </p>
              <div className="vision-list">
                <div className="vision-list-item">
                  <div className="vision-list-icon indigo" />
                  <p className="vision-list-text">Online platforms for connection and support</p>
                </div>
                <div className="vision-list-item">
                  <div className="vision-list-icon indigo" />
                  <p className="vision-list-text">Local clubs and meetup groups</p>
                </div>
                <div className="vision-list-item">
                  <div className="vision-list-icon indigo" />
                  <p className="vision-list-text">Annual conferences and networking events</p>
                </div>
              </div>
            </div>
            <div className="vision-grid-item-image">
              <div className="vision-image-container">
                <img src="/black-girls-community.jpg" alt="Community building" className="vision-image" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-On Learning Section */}
      <section className="vision-section gray-bg">
        <div className="vision-section-container">
          <div className="vision-grid">
            <div className="vision-grid-item-image">
              <div className="vision-image-container">
                <img src="/black-girls-hands-on.jpg" alt="Hands-on learning" className="vision-image" loading="lazy" />
              </div>
            </div>
            <div className="vision-grid-item-text">
              <div className="vision-badge pink-bg">
                <Lightbulb className="vision-badge-icon" />
                <span className="vision-badge-text">Hands-On Learning</span>
              </div>
              <h2 className="vision-title">Hands-On Learning</h2>
              <p className="vision-description">
                Organizing workshops, camps, and interactive sessions that allow girls to engage directly with STEM
                activities. Practical exposure is key to sparking interest and helping them visualize themselves in
                those roles.
              </p>
              <div className="vision-list">
                <div className="vision-list-item">
                  <div className="vision-list-icon pink" />
                  <p className="vision-list-text">Interactive workshops and coding bootcamps</p>
                </div>
                <div className="vision-list-item">
                  <div className="vision-list-icon pink" />
                  <p className="vision-list-text">Summer STEM camps and programs</p>
                </div>
                <div className="vision-list-item">
                  <div className="vision-list-icon pink" />
                  <p className="vision-list-text">Hands-on projects and experiments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Join Us in Shaping the Future</h2>
          <p className="cta-description">
            Together, we can create a world where every girl has the opportunity to excel in STEM and lead innovation.
          </p>
          <div className="cta-buttons">
            <Link to="/volunteer">
              <button className="cta-button primary">
                Get Involved
              </button>
            </Link>
            <Link to="/contact">
              <button className="cta-button secondary">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
