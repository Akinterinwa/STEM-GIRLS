import React, { useState } from "react";
import { Calendar, Bell, Mail } from "lucide-react";
import "./Events.css";

export default function EventsPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

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
          We're planning amazing workshops, mentorship sessions, and networking events to empower young girls in STEM.
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
          <h3>Stay Updated</h3>
          <p>
            Be the first to know when we announce our upcoming events. Get in touch with us to express your interest.
          </p>
          <div className="cta-actions">
            <button className="subscribe-button">
              Contact Us
            </button>
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <div className="email-input-wrapper">
                <Mail className="email-input-icon" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  required
                />
              </div>
              <button type="submit" className="subscribe-button">
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <p className="footer-message">
          Check back soon for announcements about our upcoming events and registration details.
        </p>
      </div>
    </div>
  );
}
