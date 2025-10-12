
import React from "react";
import "./StemForEveryone.css";

const researchData = [
  {
    id: 1,
    image: "/diverse-girls-in-science-lab.jpg",
    text: "Hands-on STEM workshops",
    backgroundColor: "#8B4789",
  },
  {
    id: 2,
    image: "/girls-coding-together.jpg",
    text: "Coding & Technology",
    backgroundColor: "#A855A7",
  },
  {
    id: 3,
    image: "/girls-with-robotics.jpg",
    text: "Robotics & Engineering",
    backgroundColor: "#9333EA",
  },
  {
    id: 4,
    image: "/girls-in-mathematics-class.jpg",
    text: "Mathematics & Research",
    backgroundColor: "#7C3AED",
  },
];

export default function StemForEveryone() {
  return (
    <section className="stem-for-everyone-section">
      <div className="stem-for-everyone-container">
        {/* Heading Section */}
        <div className="stem-for-everyone-heading">
          <h2 className="stem-for-everyone-title">STEM should be for everyone!</h2>
          <p className="stem-for-everyone-text">
            We want no girl to opt out of STEM because of prejudice, too little information or lack of inspiration. The
            association should function both as a network for those who have already found an interest in STEM and as an
            inspiration to those who have not discovered their interest in STEM yet
          </p>
        </div>

        {/* Four Image Containers */}
        <div className="stem-for-everyone-grid">
          {researchData.map((item) => (
            <div
              key={item.id}
              className="stem-for-everyone-card"
              style={{ backgroundColor: item.backgroundColor }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.text}
                className="stem-for-everyone-image"
              />
              <div className="stem-for-everyone-overlay" />
              <div className="stem-for-everyone-card-text">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
