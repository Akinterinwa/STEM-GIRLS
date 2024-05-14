import React from "react";
import "./Card.css";
import { researchData } from './data';


function ImageContainer({ image, text, backgroundColor }) {
    return (
        <div className="container" style={{ backgroundColor }}>
            <img src={image} alt="" />
            <div className="text">{text}</div>
        </div>
    );
}



const Card = () => {
    return (
        <div className="card-background">
            <div className="heading">
                <h1>What The Research Says</h1>
                <p>Although there has been significant advancement in educating and promoting STEM activities for girls, women still hold only 24% of STEM jobs in the U.S.</p>
            </div>

            <div className="four-container">
                {researchData.map(item => (
                    <ImageContainer
                        key={item.id}
                        image={item.image}
                        text={item.text}
                        backgroundColor={item.backgroundColor}
                    />
                ))}
            </div>

            <div className="explore">
                <div className="explore-content">
                    <h1>Discover Your Power</h1>
                    <img src="/Svg brush.svg" className="line-brush" alt="" />
                    <div className="girls-button">
                        GIRLS, THIS IS FOR YOU
                        <img src="/Logo.png" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
