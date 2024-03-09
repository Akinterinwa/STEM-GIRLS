import React from "react";
import "./Mission.css";
import MissionImg1 from "../../../images/pexels-mikhail-nilov-8923533.jpg";
import MissionImg2 from "../../../images/pexels-monstera-production-5063470.jpg";
import PartnerImg from "../../../images/pexels-andrea-piacquadio-3758105.jpg";
import MissionData from "../../../data/MissionData";
import Quote from "./Quote";
import Focus from "./Focus";
import Card from "./Card";
import { Link } from "react-router-dom";

const Mission = () => {
    return (
        <>
            <div className="destination">
                <div className="gradient">
                    <div className="intro">
                        <h2>
                            Fostering a future where young women embrace STEM with confidence, we strive to equip them with the skills and knowledge needed to lead and innovate in an ever-changing technological world.
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
                            {/* <img src={MissionImg} alt="alt" /> */}
                            <div>
                                <iframe className="youtube" width="560" height="315" src="https://www.youtube.com/embed/IznUUcd_kZ0?si=WsDFtqjJU-vq0UVG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="about-text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at
                                eius molestias ut quaerat perspiciatis aliquam quia nam animi
                                debitis quibusdam a vero quasi odio facilis, cum facere!
                                Excepturi, dolorem!
                            </p>
                            <Link to='/mission'>
                                <button className="btn-1">Learn More</button>
                            </Link>
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
                        img1={MissionImg1}
                        img2={MissionImg2}
                    />
                </div>
                <Card />
                <div className="background">
                    <div className="background-text">
                        <h2>BECOME INSPIRE STEM GIRLS PARTNER</h2>
                        <p>
                            Every year, major companies and philanthropic foundations sponsor our Programs. Most partners host interactive events and mentorship, offering students a truly immersive experience.
                        </p>
                        <Link to='/sponsors'>
                            <button className="btn-1">Learn More</button>
                        </Link>
                    </div>
                    <div className="background-img">
                        <img src={PartnerImg} alt="alt" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mission;
