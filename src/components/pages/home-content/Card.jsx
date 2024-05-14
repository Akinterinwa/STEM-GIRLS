import React from "react";
import "./Card.css";
import { researchData } from './data';
import { Link } from "react-router-dom";


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
                <h1>STEM should be for everyone!</h1>
                <p>We want no girl to opt out of STEM because of prejudice, too little information or lack of inspiration. The association should function both as a network for those who have already found an interest in STEM and as an inspiration to those who have not discovered their interest in STEM yet</p>
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
                    <Link to="/approach">
                        <div className="girls-button">
                            GIRLS, THIS IS FOR YOU
                            <img src="/Logo.png" alt="logo" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
