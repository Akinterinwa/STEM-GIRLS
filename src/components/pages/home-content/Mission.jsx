import React from "react";
import "./Mission.css";
import MissionImg from "../../../images/image1.jpg";
import MissionData from "../../../data/MissionData";
import Quote from "./Quote";
import Focus from "./Focus";
import Card from "./Card";

const Mission = () => {
    return (
        <>
            <div className="destination">
                <div className="gradient">
                    <div className="intro">
                        <h2>
                            Our mission is to excite and empower girls with knowledge and
                            confidence in STEM to become future problem solvers and leaders
                        </h2>
                        <h5>
                            STEM stands for Science, Technology, Engineering, and Math. When
                            given the right tools early on, we believe all girls have the power
                            to develop their own STEM identity!
                        </h5>
                    </div>

                    <Focus />
                </div>

                <div className="home-content-section">

                    <div className="about">
                        <div className="about-img">
                            <img src={MissionImg} alt="alt" />
                        </div>
                        <div className="about-text">
                            <h2>Our History</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at
                                eius molestias ut quaerat perspiciatis aliquam quia nam animi
                                debitis quibusdam a vero quasi odio facilis, cum facere!
                                Excepturi, dolorem!
                            </p>
                            <button className="btn-1">Learn More</button>
                        </div>
                    </div>

                    <Quote />

                    <div className="section-head">
                        <h1>Popular Destinations</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Praesentium corrupti soluta
                        </p>
                    </div>

                    <MissionData
                        heading="Lorem ipsum dolor sit amet"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus natus quibusdam corrupti voluptate. Maiores rem nihil sapiente enim asperiores nobis, ullam cumque veritatis neque repellat deleniti consequatur nemo. Cum, itaque!, Temporibus natus quibusdam corrupti voluptate. Maiores rem nihil sapiente enim asperiores nobis, ullam cumque veritatis neque repellat deleniti consequatur nemo. Cum, itaque!"
                        img1={MissionImg}
                        img2={MissionImg}
                    />
                </div>
                <Card />
                <div className="background">
                    <div className="background-text">
                        <h2>BECOME STEM LIKE A GIRL PARTNER</h2>
                        <p>
                            Every year, major companies and philanthropic foundations sponsor our Programs. Most partners host interactive events and mentorship, offering students a truly immersive experience.
                        </p>
                        <button className="btn-1">Learn More</button>
                    </div>

                    <div className="background-img">
                        <img src={MissionImg} alt="alt" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mission;
