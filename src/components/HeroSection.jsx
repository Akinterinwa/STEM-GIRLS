import React from 'react';
import './pages/home-content/Home.css';
import { Link } from 'react-router-dom';
import PolygonArrow from "./pages/home-content/images/Polygon 1.svg";


const HeroSection = () => {
    return (
        <div className='hero-container'>
            <div className="educateInspireContainer">
                <span className="educate">{`Educate, `}</span>
                <span className="inspire">inspire</span>
                <span>
                    <span className="span">{` `}</span>
                    <span className="empower">{`& Empower`}</span>
                </span>
            </div>

            <img
                className="svgBrushIcon"
                loading="lazy"
                alt="design"
                src="/Svg brush.svg"
            />

            <div className="encouragingYoungGirlsContainer">
                <span className="encouragingYoungGirlsContainer1">
                    <p
                        className="encouragingYoungGirls"
                    >{`Encouraging young girls to pursue career paths in STEM related `}</p>
                    <p className="disciplinesAndReach">
                        disciplines and reach their full potentials.
                    </p>
                </span>
            </div>

            <div className="buttons">
                    <Link to="/start-new">
                <button className="btn-1 hero-donate">
                        <div className="label">START A SITE</div>
                </button>
                    </Link>
                    <Link to="volunteer">
                <button className="btn-1 learn-btn">
                        <img className="buttonChild" alt="" src={PolygonArrow} />
                        <div className="">VOLUNTEER</div>
                </button>
                    </Link>

            </div>
        </div>
    )
}

export default HeroSection