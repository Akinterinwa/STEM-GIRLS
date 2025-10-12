import { ArrowLeft } from "lucide-react";
import "./Team.css";

export default function Team() {
  return (
    <div className="founder-page">
      <nav className="founder-nav founder-container">
        <a href="/" className="back-link">
          <ArrowLeft className="back-link-icon" />
          Back to Home
        </a>
      </nav>

      <div className="founder-container">
        <div className="founder-header">
          <p className="founder-subtitle">
            Inspire STEM Girls (ISG) Board of Directors
          </p>
          <h1 className="founder-title">Our Founder</h1>
        </div>

        <div className="founder-content-box">
          {/* Left side - Image */}
          <div className="founder-image-section">
            <div className="founder-image-container">
              <img src="/Adelusi.jpg" alt="Oluwaseyi Adelusi" className="founder-image" />
            </div>
            <div className="founder-info">
              <h2 className="founder-name">Oluwaseyi Adelusi</h2>
              <p className="founder-role">Founder and President</p>
            </div>
          </div>

          {/* Right side - Text */}
          <div className="founder-bio">
            <div>
              <p>
                Oluwaseyi Adelusi is a passionate software engineer dedicated to building innovative solutions and
                inspiring the next generation of female leaders in STEM (Science, Technology, Engineering, and
                Mathematics). With a deep-rooted love for technology and a fervent belief in the power of diversity, she
                is on a mission to break down barriers and empower young girls to pursue their dreams in the tech
                industry.
              </p>

              <p>
                Armed with a Bachelor's degree in Electrical and Electronics Engineering and a Master's in Computer
                Science, she embarked on her career journey with a commitment to excellence and a drive to make a
                difference. Over the years, she has honed her skills in software development, specializing in automating
                cloud software delivery cycles and has contributed to cutting-edge projects that have transformed
                industries.
              </p>

              <p>
                Beyond her technical prowess, Oluwaseyi is a staunch advocate for diversity and inclusion in STEM
                fields. She actively mentors aspiring young girls, sharing her experiences and insights to help them
                navigate the challenges and opportunities in the tech world. Through workshops, talks, and community
                outreach programs, she strives to foster a supportive environment where girls feel empowered to pursue
                their passions in technology.
              </p>

              <p>
                Recognized for her dedication and impact, Oluwaseyi has been featured in media outlets and has received
                accolades for her contributions to the tech community. Whether she's coding a groundbreaking software
                solution or inspiring the next generation of innovators, Oluwaseyi is committed to making a lasting
                impact and creating a more inclusive future for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
