import React from 'react';
import './pages/home-content/Home.css';
import { Link } from 'react-router-dom';


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
                        <div className="label">Start a Site</div>
                </button>
                    </Link>
                    <Link to="volunteer">
                <button className="btn-1 learn-btn">
                        <img className="buttonChild" alt="" src="/Polygon 1.svg" />
                        <div className="">Volunteer</div>
                </button>
                    </Link>

            </div>
        </div>
    )
}

export default HeroSection