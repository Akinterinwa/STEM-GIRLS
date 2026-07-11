"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import "./OurMission.css"

export default function MissionSection() {
  const [openObjective, setOpenObjective] = useState(0)

  const objectives = [
    {
      title: "Increase Accessibility",
      description:
        "Ensuring that girls from all backgrounds have access to STEM education and resources. This includes providing scholarships, learning materials, and access to technology for underprivileged communities.",
      image: "/black-girls-stem-accessibility.jpg",
    },
    {
      title: "Foster Innovation",
      description:
        "Creating spaces where young girls can experiment, innovate, and develop creative solutions to real-world problems through hands-on STEM projects and mentorship.",
      image: "/black-girls-innovation.jpg",
    },
    {
      title: "Build Confidence",
      description:
        "Empowering girls to believe in their abilities and pursue their passions in STEM fields through supportive communities, role models, and success stories.",
      image: "/black-girls-confidence.jpg",
    },
  ]

  return (
    <div className="mission-section">
      {/* Hero Section */}
      <section className="mission-container mission-hero-section">
        <div className="mission-hero-content">
          <h1 className="mission-hero-title">
            Empowering the next generation of <span className="highlight">STEM leaders</span>
          </h1>
          <p className="mission-hero-description">
            Inspire STEM Girls' (ISG) mission is to cultivate an empowering environment that encourages young girls to
            explore and excel in the fields of science, technology, engineering, and mathematics (STEM).
          </p>
        </div>
      </section>

      {/* The Power of Girls Section */}
      <section className="mission-container power-of-girls-section">
        <div className="power-of-girls-content">
          <div className="power-of-girls-image-container">
            <img
              src="/black-girls-power-stem.jpg"
              alt="Young Black girls collaborating on STEM project"
              className="power-of-girls-image"
              loading="lazy"
            />
          </div>
          <div className="power-of-girls-text">
            <h2>THE POWER OF GIRLS</h2>
            <p>
              By fostering a passion for these disciplines, the mission aims to bridge the gender gap and promote
              equality within these traditionally male-dominated fields.
            </p>
            <p>
              We believe girls are just as smart and capable of achieving success in science, technology, engineering,
              and math (STEM) as boys.
            </p>
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section className="mission-container core-objectives-section">
        <div className="core-objectives-content">
          <h2 className="core-objectives-title">
            Core Objectives of Inspire STEM Girls (ISG)
          </h2>

          <div className="objectives-accordion">
            {objectives.map((objective, index) => (
              <div key={index} className="objective-item">
                <button
                  onClick={() => setOpenObjective(openObjective === index ? null : index)}
                  className="objective-header"
                >
                  <span className="objective-title">{objective.title}</span>
                  <div className="objective-icon-container">
                    {openObjective === index ? (
                      <Minus className="objective-icon" />
                    ) : (
                      <Plus className="objective-icon" />
                    )}
                  </div>
                </button>

                {openObjective === index && (
                  <div className="objective-body">
                    <div className="objective-content">
                      <div className="objective-image-container">
                        <img
                          src={objective.image || "/placeholder.svg"}
                          alt={objective.title}
                          className="objective-image"
                          loading="lazy"
                        />
                      </div>
                      <p className="objective-description">{objective.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}