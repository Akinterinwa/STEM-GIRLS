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
                            At <bold className="bold"> Inspire STEM Girls,</bold> we believe in the power of women and minority voices to shape our future. Your voice matters. We need you, just as you are, to join us in creating a world where everyone's contributions are valued. Together, let's empower the next generation of STEM leaders.
                            </p>
                            <Link to='/mission'>
                                <button className="btn-1">Learn More</button>
                            </Link>
                        </div>
                    </div>
                    <Quote />

                    <MissionData
                        text="Join us in making a difference! Become a mentor and help shape the future of STEM by empowering the next generation of leaders. By sharing your knowledge and experiences, you'll not only build confidence in young women but also grow your own network and leave a lasting legacy. Together, let's inspire, guide, and create opportunities for success. Take the first step towards making a meaningful impact - become a mentor today!"
                        img1={MissionImg1}
                        img2={MissionImg2}
                    />
                </div>
                <Card />
                <div className="background">
                    <div className="background-text">
                        <h2>BECOME INSPIRE STEM GIRLS PARTNER</h2>
                        <p>
                        Empower the next generation of STEM leaders. Partner with Inspire STEM Girls and be a catalyst for change. Together, we'll break barriers and shape the future of innovation. Join us today and make a difference that lasts a lifetime.
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
