import React from "react";
import "./Mission.css";
import Quote from "./Quote";
import Focus from "./Focus";
import Card from "./Card";
import { Link } from "react-router-dom";

const Mission = () => {
    return (
        <div className="destination">
            <div className="gradient">
                <div className="intro">
                    <h2>
                        Fostering a future where young women embrace STEM with confidence, we strive to equip them with the skills and knowledge needed to lead and innovate in an ever-changing technological world.
                    </h2>
                    <div className="stand-container">
                        <h5>
                            STEM stands for Science, Technology, Engineering, and Math. When
                            given the right tools early on, we believe all girls have the power
                            to develop their own STEM identity!
                        </h5>
                        <div className="learn-more btn-1">
                            Learn more
                            <img className="learn-arrow"
                                src="/Vector.svg" alt="" />
                        </div>
                    </div>
                </div>

                <Focus />
            </div>


            <div className="home-content-section">
                <div className="our-belive-youtube">
                    <div className="belive-content">
                        <h3 className="belive-heading">
                            At Inspire STEM Girls, we believe in the power of women and minority voices to shape our future. Your voice matters.
                        </h3>
                        <p className="belive-text">We need you, just as you are, to join us in creating a world where everyone's contributions are valued. Together, let's empower the next generation of STEM leaders.</p>
                        <div className="belive-cta">
                            <div className="action-1">Donate</div>
                            <div className="action-2"><img src="/Icon.svg" alt="icon" />
                                Join our Community</div>
                        </div>
                    </div>

                    <div className="youtube_link">
                        <div className="youtube-link">
                            <iframe className="youtube" width="900" height="550" src="https://www.youtube.com/embed/IznUUcd_kZ0?si=WsDFtqjJU-vq0UVG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <Quote />
            </div>
            <Card />
            <div className="background">
                <div className="background-text">
                    <h2>BECOME INSPIRE STEM GIRLS PARTNER</h2>
                    <p>
                        Empower the next generation of STEM leaders. Partner with Inspire STEM Girls and be a catalyst for change. Together, we'll break barriers and shape the future of innovation. Join us today and make a difference that lasts a lifetime.
                    </p>
                    <Link to='/sponsors'>
                        <div className="become-partner">Become a partner</div>
                    </Link>
                </div>
                <div className="background-img">
                    <img src="/become.svg" alt="alt" />
                </div>
            </div>
        </div>
    );
};

export default Mission;
