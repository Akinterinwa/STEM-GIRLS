import React from "react";
import { Calendar, Bell } from "lucide-react";
import "./Events.css";

export default function EventsPage() {
  return (
    <div className="events-page">
      {/* Header */}
      <div className="events-header">
        <div className="events-header-content">
          <h1>Upcoming Events</h1>
          <p>Inspire STEM Girls Events & Workshops</p>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="coming-soon-section">
        <div className="calendar-icon-container">
          <div className="calendar-icon-wrapper">
            <div className="calendar-icon-blur"></div>
            <Calendar className="calendar-icon" />
          </div>
        </div>

        <h2>Exciting Events Coming Soon</h2>

        <p className="subtitle">
          We\'re planning amazing workshops, mentorship sessions, and networking events to empower young girls in STEM.
          While we finalize the dates and details, we encourage you to stay connected with us.
        </p>

        <div className="event-types-grid">
          <div className="event-type-card">
            <div className="icon-container">
              <Calendar className="icon" />
            </div>
            <h3>Workshops</h3>
            <p>Hands-on STEM learning experiences</p>
          </div>

          <div className="event-type-card">
            <div className="icon-container">
              <Bell className="icon" />
            </div>
            <h3>Mentorship</h3>
            <p>Connect with industry professionals</p>
          </div>

          <div className="event-type-card">
            <div className="icon-container">
              <Calendar className="icon" />
            </div>
            <h3>Networking</h3>
            <p>Build connections with peers</p>
          </div>
        </div>

        <div className="cta-section">
          <p>
            Be the first to know when we announce our upcoming events. Sign up for our events newsletter below.
          </p>
          <div className="cta-actions" style={{ position: 'relative', height: '400px', width: '100%', marginTop: '20px' }}>
            <iframe
              title='Signup form powered by Zeffy'
              style={{
                position: 'absolute',
                border: '0',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                width: '100%',
                height: '100%'
              }}
              src='https://www.zeffy.com/en-US/embed/newsletter-form/events-newsletter'
              allowTransparency="true"
            ></iframe>
          </div>
        </div>

        <p className="footer-message">
          Check back soon for announcements about our upcoming events and registration details.
        </p>
      </div>
    </div>
  );
}
