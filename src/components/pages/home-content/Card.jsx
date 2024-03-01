import React from "react";
import "./Card.css";
import CardImg from '../../../images/image1.jpg';

const Card = () => {
    return (
        <>
        <div className="card-component">
            <div className="card">
                <img className="card-image" src={CardImg} alt='image' />
                <p className="card-description">STUDIES SHOW THAT GIRLS ENJOY STEM ACTIVITIES BUT 4 IN 10 GIRLS SAY THEY DON'T GET ENOUGH PRACTICAL EXPERIENCES</p>
            </div>
            <div className="card">
                <img className="card-image" src={CardImg} alt='image' />
                <p className="card-description">STUDIES SHOW THAT GIRLS ENJOY STEM ACTIVITIES BUT 4 IN 10 GIRLS SAY THEY DON'T GET ENOUGH PRACTICAL EXPERIENCES</p>
            </div>
            <div className="card">
                <img className="card-image" src={CardImg} alt='image' />
                <p className="card-description">STUDIES SHOW THAT GIRLS ENJOY STEM ACTIVITIES BUT 4 IN 10 GIRLS SAY THEY DON'T GET ENOUGH PRACTICAL EXPERIENCES</p>
            </div>
            <div className="card">
                <img className="card-image" src={CardImg} alt='image' />
                <p className="card-description">STUDIES SHOW THAT GIRLS ENJOY STEM ACTIVITIES BUT 4 IN 10 GIRLS SAY THEY DON'T GET ENOUGH PRACTICAL EXPERIENCES</p>
            </div>
        </div>
        <div className="explore">
            <div className="explore-content">
            <h1>EXPLORE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis earum beatae praesentium ipsum. Dolor, delectus quam corporis </p>
            <button>Learn More</button>
            </div>
        </div>
        </>
    );
};

export default Card;
