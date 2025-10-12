import { Link } from "react-router-dom";
import { FaBullseye, FaEye, FaUsers } from "react-icons/fa";
import "./Focus.css";

export default function FocusSection() {
  return (
    <section className="focus-section">
      <div className="focus-container">
        <div className="focus-grid">
          {/* Mission Card */}
          <div className="focus-card">
            <div className="focus-card-icon-container">
              <FaBullseye className="focus-card-icon" />
            </div>
            <h2 className="focus-card-title">Our Mission</h2>
            <p className="focus-card-text">
              Inspire STEM Girls' (ISG) mission is to cultivate an empowering environment that encourages young girls to
              explore and excel in the field
            </p>
            <Link
              to="/mission"
              className="focus-card-link"
            >
              Read More →
            </Link>
          </div>

          {/* Vision Card */}
          <div className="focus-card">
            <div className="focus-card-icon-container">
              <FaEye className="focus-card-icon" />
            </div>
            <h2 className="focus-card-title">Our Vision</h2>
            <p className="focus-card-text">
              Our vision is a world where every girl has the opportunity, encouragement, and resources to pursue a
              career in STEM. We strive to break down barriers
            </p>
            <Link
              to="/approach"
              className="focus-card-link"
            >
              Read More →
            </Link>
          </div>

          {/* Founder Card */}
          <div className="focus-card">
            <div className="focus-card-icon-container">
              <FaUsers className="focus-card-icon" />
            </div>
            <h2 className="focus-card-title">Our Founder</h2>
            <p className="focus-card-text">
              We believe in the combined power of girls, parents, and mentors to build confidence in young girls and
              shape their future in STEM fields
            </p>
            <Link
              to="/team"
              className="focus-card-link"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
