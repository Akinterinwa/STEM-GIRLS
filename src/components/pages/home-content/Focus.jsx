import { Link } from "react-router-dom";
import { FaBullseye, FaEye, FaUsers } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "./Focus.css";

export default function FocusSection() {
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: approachRef, inView: approachInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: founderRef, inView: founderInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="focus-section">
      <div className="focus-container">
        <div className="focus-grid">
          {/* Mission Card */}
          <div className="focus-card" ref={missionRef}>
            <div className="focus-card-icon-container">
              <FaBullseye className="focus-card-icon" />
            </div>
            <h2 className={`focus-card-title ${missionInView ? "text-focus-in" : ""}`}>Our Mission</h2>
            <p className={`focus-card-text ${missionInView ? "text-focus-in" : ""}`}>
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
          <div className="focus-card" ref={approachRef}>
            <div className="focus-card-icon-container">
              <FaEye className="focus-card-icon" />
            </div>
            <h2 className={`focus-card-title ${approachInView ? "text-focus-in" : ""}`}>Our Approach</h2>
            <p className={`focus-card-text ${approachInView ? "text-focus-in" : ""}`}>
            Educating girls about the vast opportunities in STEM careers. This involves bringing in guest speakers, organizing field trips to tech companies and laboratories...
            </p>
            <Link
              to="/approach"
              className="focus-card-link"
            >
              Read More →
            </Link>
          </div>

          {/* Founder Card */}
          <div className="focus-card" ref={founderRef}>
            <div className="focus-card-icon-container">
              <FaUsers className="focus-card-icon" />
            </div>
            <h2 className={`focus-card-title ${founderInView ? "text-focus-in" : ""}`}>Our Founder</h2>
            <p className={`focus-card-text ${founderInView ? "text-focus-in" : ""}`}>
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
