"use client"

import { Mail, Heart, Users, Lightbulb } from "lucide-react"
import { Link } from "react-router-dom"
import "./Volunteer.css"

export default function VolunteerPage() {
  return (
    <div className="volunteer-page">
      {/* Header */}
      <div className="volunteer-header">
        <div className="volunteer-header-content">
          <h1 className="main-text">Volunteer With Us</h1>
          <div className="divider"></div>
          <p className="paragraph">Empower the next generation in STEM</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="volunteer-hero-section">
        <div className="volunteer-hero-card">
          <h2>Interested in joining our volunteer team?</h2>
          <p>
            Empower the next generation in STEM. Become a mentor with us and make a tangible difference in young lives.
            Your expertise can inspire future innovators, guiding them through challenges and nurturing their potential.
            Together, let\'s shape a brighter future. Join now and be part of something truly impactful.
          </p>
          <div className="button-group">
            <a href="#zeffy-form" className="btn">
              Join our volunteer team
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Volunteer Roles */}
      <div className="volunteer-roles">
        <div className="volunteer-roles-grid">
          {/* Become a Mentor */}
          <div className="volunteer-card">
            <img
              src="/black-girls-hands-on.jpg"
              alt="Black women mentoring in STEM"
            />
            <div className="volunteer-card-content">
              <div className="volunteer-card-header">
                <Heart className="icon" />
                <h3>Become a Mentor</h3>
              </div>
              <p>
                Are you someone who works in a STEM field looking to excite and inspire girls? Did you have a mentor who
                encouraged you to pursue your science and engineering interests? Be that person for young girls and their
                families by volunteering as a mentor with us!
              </p>
            </div>
          </div>

          {/* Workshop Volunteer */}
          <div className="volunteer-card">
            <img
              src="/black-girls-hands-on.jpg"
              alt="Black girls in hands-on STEM workshop"
            />
            <div className="volunteer-card-content">
              <div className="volunteer-card-header">
                <Lightbulb className="icon" />
                <h3>Workshop Volunteer</h3>
              </div>
              <p>
                Are you not in a STEM field but looking for an opportunity to impact girls and their families through
                fun hands-on science and engineering activities? Consider volunteering at one of our workshops!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Opportunities Section */}
      <div id="opportunities" className="opportunities-section">
        <div className="opportunities-content">
          <h2>Volunteer Opportunities</h2>

          <div className="opportunities-card">
            <p>
              Volunteers keep our workshops running smoothly by helping lead activities, welcoming girls at
              registration, and encouraging them during the projects. Whatever your interest or time commitment is, we
              have a role for you!
            </p>
            <p>
              Both male and female volunteers are welcome. If you are interested in bringing Inspire STEM Girls to your
              community, please check out our Start a New Site information page to learn more about what is involved.
            </p>
            <div className="contact-info">
              <Mail className="icon" />
              <div>
                <p>Have questions?</p>
                <p>
                  <a href="mailto:inspirestemgirl@gmail.com">
                    Email us at inspirestemgirl@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Inclusivity Statement */}
          <div className="inclusivity-statement">
            <div className="inclusivity-statement-header">
              <Users className="icon" />
              <h3>Our Commitment to Inclusivity</h3>
            </div>
            <p>
              Inspire STEM Girls (ISG) is dedicated to providing a welcoming, inclusive, and equitable environment for
              all employees, volunteers and workshop participants. We treat all people with respect and dignity and are
              committed to providing a safe environment for every person. We welcome people who identify as non-binary
              or gender nonconforming who wish to be in a female-identified environment.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="zeffy-form" className="cta-section">
        <div className="cta-content">
          <h2>Ready to Make a Difference?</h2>
          <p>
            Join our volunteer team and help shape the future of STEM for young women.
          </p>
          <div className="zeffy-form-container">
            <iframe title='Signup form powered by Zeffy' className="zeffy-iframe" src='https://www.zeffy.com/en-US/embed/newsletter-form/volunteer-4' allowTransparency="true"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
