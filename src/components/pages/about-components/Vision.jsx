import React from "react";
import IntroImg1 from "../../../images/stem-girls-img-3.jpg";
import IntroImg2 from "../../../images/stem-girls-img.jpg";
import IntroImg3 from "../../../images/stem-grils-img-5.jpg";

const Approach = () => {
  return (
    <>
      <div className="approach-hero">
        <h1>Our Vision</h1>
      </div>
      <div className="approach">
        <div className="heading">
          <h3>
            Our vision is a world where every girl has the opportunity,
            encouragement, and resources to pursue a career in STEM.
          </h3>
        </div>
        <div className="intro-image">
          <img className="image" src={IntroImg1} alt="intro stem" />
        </div>

        <div className="image-within-text">
          <p>
            {" "}
            <img
              className="image-size"
              src={IntroImg2}
              alt="intro"
              style={{ float: "right", marginLeft: "10px" }}
            />
            We strive to break down barriers and change societal expectations,
            ensuring that girls can lead and innovate in science, technology,
            engineering, and mathematics, contributing to a diverse, balanced,
            and advanced global community.
          </p>
        </div>

        <div className="image-within-text">
          <h1>Career Guidance and Awareness</h1>
          <p>
            {" "}
            <img
              className="image-size"
              src={IntroImg3}
              alt="intro"
              style={{ float: "right", marginLeft: "10px" }}
            />
            Educating girls about the vast opportunities in STEM careers. This
            involves bringing in guest speakers, organizing field trips to tech
            companies and laboratories, and providing early career counseling.
          </p>
        </div>
        <h1>Community Building:</h1>
        <p>
          {" "}
          Creating a supportive community where girls can share their
          experiences, challenges, and successes. This could be facilitated
          through online platforms, clubs, and annual conferences that enable
          networking and camaraderie.
        </p>
        <div className="image-within-text">
          <h1> Hands-On Learning:</h1>
          <p>
            {" "}
            Organizing workshops, camps, and interactive sessions that allow
            girls to engage directly with STEM activities. Practical exposure is
            key to sparking interest and helping them visualize themselves in
            those roles.
          </p>
        </div>
      </div>
    </>
  );
};

export default Approach;
