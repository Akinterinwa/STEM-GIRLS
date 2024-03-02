import React from "react";
import "./Card.css";
import CardImg from '../../../images/image1.jpg';

const Card = () => {
    return (
        <div className="card-background">
        <div className="heading">
            <h1>What The Research Says</h1>
            <p>Although there has been significant advancement in educating and promoting STEM activities for girls, women still hold only 24% of STEM jobs in the U.S.</p>
        </div>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis earum </p>
            <button>Learn More</button>
            </div>
        </div>
        </div>
    );
};

export default Card;
