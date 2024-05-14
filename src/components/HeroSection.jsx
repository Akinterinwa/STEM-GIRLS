import React from 'react';
import './pages/home-content/Home.css';


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
                <button className="btn-1 hero-donate">
                    <div className="label">Donate</div>
                </button>
                <button className="btn-1 learn-btn">
                    <img className="buttonChild" alt="" src="/Polygon 1.svg" />
                    <div className="">Learn more</div>
                </button>

            </div>
        </div>
    )
}

export default HeroSection