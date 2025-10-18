import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./Contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <div className="contact-header-content">
          <h1>Get In Touch</h1>
          <p>
            Have questions or want to learn more about Inspire STEM Girls? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-main-content">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Send us a Message</h2>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message here..."
                />
              </div>

              <button type="submit" className="submit-button">
                <Send className="icon" />
                Send Message
              </button>

              {submitted && (
                <div className="submitted-message">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-container">
            <h2>Contact Information</h2>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail className="icon" />
              </div>
              <div className="contact-info-content">
                <h3>Email</h3>
                <a href="mailto:inspirestemgirl@gmail.com">
                  inspirestemgirl@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone className="icon" />
              </div>
              <div className="contact-info-content">
                <h3>Phone</h3>
                <a href="tel:+1234567890">+1 (234) 567-8900</a>
                <a href="tel:+19876543210">+1 (987) 654-3210</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin className="icon" />
              </div>
              <div className="contact-info-content">
                <h3>Address</h3>
                <p>
                  123 Innovation Street
                  Tech City, TC 12345
                  <br />
                  United States
                </p>
              </div>
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <p>
                <span>Monday - Friday:</span> 9:00 AM - 6:00 PM
              </p>
              <p>
                <span>Saturday:</span> 10:00 AM - 4:00 PM
              </p>
              <p>
                <span>Sunday:</span> Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
