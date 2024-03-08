import React from "react";
import "./Card.css";
import CardImg1 from '../../../images/pexels-cottonbro-studio-4705606.jpg';
import CardImg2 from '../../../images/pexels-mikhail-nilov-8923373.jpg';
import CardImg3 from '../../../images/pexels-monstera-production-5063445.jpg';
import CardImg4 from '../../../images/pexels-mikhail-nilov-8923577.jpg';


const Card = () => {
    return (
        <div className="card-background">
        <div className="heading">
            <h1>What The Research Says</h1>
            <p>Although there has been significant advancement in educating and promoting STEM activities for girls, women still hold only 24% of STEM jobs in the U.S.</p>
        </div>
        <div className="card-component">
            <div className="card">
                <img className="card-image" src={CardImg1} alt='card' />
                <p className="card-description">STUDIES SHOW THAT GIRLS ENJOY STEM ACTIVITIES BUT 4 IN 10 GIRLS SAY THEY DON'T GET ENOUGH PRACTICAL EXPERIENCES</p>
            </div>
            <div className="card">
                <img className="card-image" src={CardImg2} alt='card' />
                <p className="card-description">STUDIES SHOW THAT GIRLS ENJOY STEM ACTIVITIES BUT 4 IN 10 GIRLS SAY THEY DON'T GET ENOUGH PRACTICAL EXPERIENCES</p>
            </div>
            <div className="card">
                <img className="card-image" src={CardImg3} alt='card' />
                <p className="card-description">STUDIES SHOW THAT GIRLS ENJOY STEM ACTIVITIES BUT 4 IN 10 GIRLS SAY THEY DON'T GET ENOUGH PRACTICAL EXPERIENCES</p>
            </div>
            <div className="card">
                <img className="card-image" src={CardImg4} alt='card' />
                <p className="card-description">STUDIES SHOW THAT GIRLS ENJOY STEM ACTIVITIES BUT 4 IN 10 GIRLS SAY THEY DON'T GET ENOUGH PRACTICAL EXPERIENCES</p>
            </div>
        </div>
        <div className="explore">
            <div className="explore-content">
            <h1>EXPLORE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis earum </p>
            <button className="btn-1 btn-color">Learn More</button>
            </div>
        </div>
        </div>
    );
};

export default Card;
