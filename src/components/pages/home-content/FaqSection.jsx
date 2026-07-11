import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FaqSection.css';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What age groups do your STEM programs serve ?",
    answer:
      "Our programs are designed for girls aged 12-18, from middle school through high school. We offer age-appropriate curricula that grow with participants, ensuring engaging and challenging content at every level.",
  },
  {
    question: "Do participants need prior STEM experience?",
    answer:
      "Not at all! Our programs welcome girls at all skill levels, from complete beginners to those with advanced knowledge. We believe in meeting students where they are and helping them grow from there.",
  },
  {
    question: "What subjects and skills are covered?",
    answer:
      "We cover a comprehensive range of STEM fields including computer science, robotics, engineering design, mathematics, data science, and emerging technologies like AI and machine learning. Beyond technical skills, we also focus on leadership, problem-solving, and collaboration.",
  },
  {
    question: "How can my daughter get involved?",
    answer:
      "Getting started is easy! You can register for our programs through our website, attend one of our open house events, or contact us directly. We offer various program formats including after-school clubs, weekend workshops, and summer intensives.",
  },
  {
    question: "Are there scholarships or financial aid available?",
    answer:
      "Yes! We're committed to making our programs accessible to all. We offer need-based scholarships and sliding scale fees. Financial circumstances should never be a barrier to participation.",
  },
  {
    question: "What makes your program different from others?",
    answer:
      "Our program combines rigorous technical education with mentorship from women in STEM fields, hands-on project-based learning, and a supportive community. We focus not just on skills, but on building confidence, leadership, and a lasting passion for STEM.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <span className="faq-badge">Got Questions?</span>
          <h2 className="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="faq-subtitle">
            Find answers to common questions about our STEM programs. Don't see your question? Feel free to reach out to
            us directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq-items-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="faq-question-button"
              >
                <span className="faq-question-text">{faq.question}</span>
                <div className="faq-icon">
                  {openIndex === index ? (
                    <FaMinus size="1.25rem" className="faq-icon-minus" />
                  ) : (
                    <FaPlus size="1.25rem" className="faq-icon-plus" />
                  )}
                </div>
              </button>

              <div
                className={`faq-answer-container ${openIndex === index ? 'open' : 'closed'}`}>
                <div className="faq-answer-content">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="faq-cta">
          <p className="faq-cta-text">Still have questions?</p>
          <Link to="/contact">
            <button className="contact-button">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
