import React from 'react';
import './Focus.css';
import { Link } from 'react-router-dom';
import Container1 from "../home-content/images/Container.svg";
import Container2 from "../home-content/images/Container (1).svg";
import Container3 from "../home-content/images/Container (2).svg";




const Focus = () => {
    return (
            <div className="focus">
                <div className="focus-container focus-mission">
                    <div className="icon">
                        <img src={Container1} alt="mission svg" />
                    </div>
                    <div className="h2">Our Mission</div>
                    <p>Inspire STEM Girls' (ISG) mission is to cultivate an empowering environment that encourages young girls to explore and excel in the field</p>
                    <Link to="/mission">
                        <p className="read">Read More </p>
                    </Link>
                </div>
                <div className="focus-container focus-vision">
                    <div className="icon">
                        <img src={Container2} alt="Team svg" />
                    </div>
                    <div className="h2">Our Vision</div>
                    <p>Our vision is a world where every girl has the opportunity, encouragement, and resources to pursue a career in STEM. We strive to break down barriers</p>
                    <Link to="/approach">
                        <p className="read">Read More </p>
                    </Link>
                </div>
                <div className="focus-container focus-team">
                    <div className="icon">
                        <img src={Container3} alt="Vision svg" />                      </div>
                    <div className="h2">Our Team</div>
                    <p>We believe in the combined power of girls, parents, and mentors to build confidence in young girls and shape their future in STEM fields</p>
                    <Link to='/team'>
                        <p className="read">Read More </p>
                    </Link>
                </div>
            </div>
    )
}

export default Focus