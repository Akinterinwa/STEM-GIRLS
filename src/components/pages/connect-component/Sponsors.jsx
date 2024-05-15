import React from "react";
import "../connect-component/Connect.css";
import InvestmentImg from "../../../images/pexels-alena-darmel-7750712.jpg";
import LogoImg from "../../../images/png purple.png";

const Sponsors = () => {
  return (
    <>
      <div className="sponsors-hero">
        <h1>Sponsors</h1>
      </div>
      <div className="sponsors">
        <div className="investment-container">
          <div className="invest-image">
            <img src={InvestmentImg} alt="investment" />
          </div>
          <div className="texts">
            <h4>An investment in her confidence and potential</h4>
            <p>
              Our partners are vital to advancing the mission of Inspire STEM Girls
              as they provide critical financial, in-kind and volunteer
              support needed to best serve girls in our area. You can learn more
              about our sponsorship opportunities by
              emailing us directly to talk about personalized opportunities.
            </p>
            <div className="text-button">
              <button className="btn-1 button">Contact Us</button>
            </div>
          </div>
        </div>
        <p>
          For questions or inquiries about becoming a sponsor, please email us
          at inspirestemgirl@gmail.com
        </p>
        <div className="logo-connect">
          <img src={LogoImg} alt="logo" />
        </div>
        <p className="last">
          Inspire STEM Girls (ISG) reserves the right to decline affiliation with
          donors, sponsors, or partners (both corporate and individuals) at the
          discretion of the Board of Directors if the donor does not align with
          our mission and commitment to inclusion.
        </p>
      </div>
    </>
  );
};

export default Sponsors;
