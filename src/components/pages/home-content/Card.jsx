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
                <p className="card-description">STEM girls are breaking barriers: They are challenging stereotypes and proving that gender is not a barrier to success in STEM fields.</p>
            </div>
            <div className="card">
                <img className="card-image" src={CardImg2} alt='card' />
                <p className="card-description">They are role models: STEM girls inspire others with their passion, dedication, and resilience in pursuing their STEM aspirations.</p>
            </div>
            <div className="card">
                <img className="card-image" src={CardImg3} alt='card' />
                <p className="card-description">They are lifelong learners: STEM girls are curious and eager to learn, constantly seeking new knowledge and skills to further their understanding of the world.</p>
            </div>
            <div className="card">
                <img className="card-image" src={CardImg4} alt='card' />
                <p className="card-description">They are shaping the future: STEM girls are the leaders and innovators of tomorrow, shaping the future of technology, science, engineering, and mathematics with their ideas, passion, and expertise.</p>
            </div>
        </div>
        <div className="explore">
            <div className="explore-content">
            <h1>Discover Your Power</h1>
            <button className="btn-1 btn-color">GIRLS, THIS IS FOR YOU </button>
            </div>
        </div>
        </div>
    );
};

export default Card;
