import React, { useEffect, useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import "./Contact.css";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xkgppqev");
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      // Reset form fields manually
      if (formRef.current) {
        formRef.current.reset();
      }

      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000); // Display success for 2 seconds

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <div className="contact-header-content">
          <h1>Get In Touch</h1>
          <p>
            Have questions or want to learn more about Inspire STEM Girls? We'd
            love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-main-content">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Send us a Message</h2>

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message here..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={state.submitting || showSuccess}
              >
                {state.submitting ? (
                  "Sending..."
                ) : showSuccess ? (
                  <>
                    <Check className="icon" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="icon" />
                    Send Message
                  </>
                )}
              </button>
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
                  123 Innovation Street Tech City, TC 12345
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
