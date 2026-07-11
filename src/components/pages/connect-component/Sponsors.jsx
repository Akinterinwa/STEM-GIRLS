import { Mail } from "lucide-react"
import "./Sponsors.css"

export default function SponsorsPage() {
  return (
    <div className="sponsors-page">
      {/* Header Section */}
      <div className="sponsors-header">
        <div className="sponsors-header-content">
          <h1>Sponsors</h1>
          <div className="divider"></div>
          <p className="subtitle">An investment in her confidence and potential</p>
          <p className="description">
            Our partners are vital to advancing the mission of Inspire STEM Girls as they provide critical financial,
            in-kind and volunteer support needed to best serve girls in our area.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="sponsors-main-content">
        {/* Sponsorship Opportunities */}
        <div className="sponsorship-opportunities">
          <div className="sponsorship-opportunities-text">
            <h2>Sponsorship Opportunities</h2>
            <p>
              You can learn more about our sponsorship opportunities by emailing us directly to talk about personalized
              opportunities. Whether you're a corporation, foundation, or individual donor, we have flexible partnership
              models designed to align with your values and goals.
            </p>
            <p>
              By partnering with Inspire STEM Girls, you'll directly impact the lives of young women pursuing careers in
              STEM, helping to break down barriers and create a more inclusive future in science, technology,
              engineering, and mathematics.
            </p>
          </div>
          <div className="sponsorship-opportunities-image">
            <img
              src="/black-girl-presenting.jpg"
              alt="Partnership and collaboration"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="sponsors-contact-section">
          <h2>Contact Us</h2>
          <p>
            For questions or inquiries about becoming a sponsor, please reach out to us directly:
          </p>
          <div className="sponsors-contact-info">
            <Mail className="icon" />
            <a href="mailto:inspirestemgirl@gmail.com">
              inspirestemgirl@gmail.com
            </a>
          </div>
        </div>

        {/* Impact Section */}
        <div className="impact-section">
          <div className="impact-image">
            <img
              src="/black-girl-presenting.jpg"
              alt="Girls celebrating success"
              loading="lazy"
            />
          </div>
          <div className="impact-text">
            <h2>Your Impact Matters</h2>
            <p>
              Every contribution, whether financial, in-kind, or through volunteer support, makes a tangible difference
              in the lives of young women pursuing STEM careers. Your partnership helps us provide scholarships,
              learning materials, mentorship, and access to technology for girls from all backgrounds.
            </p>
          </div>
        </div>

        {/* Mission Alignment */}
        <div className="mission-alignment">
          <h3>Our Commitment to Inclusion</h3>
          <p>
            Inspire STEM Girls (ISG) reserves the right to decline affiliation with donors, sponsors, or partners (both
            corporate and individuals) at the discretion of the Board of Directors if the donor does not align with our
            mission and commitment to inclusion. We are dedicated to ensuring that all partnerships reflect our values
            of equity, diversity, and empowerment.
          </p>
        </div>
      </div>
    </div>
  )
}
