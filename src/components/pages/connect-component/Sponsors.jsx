import React from "react";
import "../connect-component/Connect.css";
import InvestmentImg from "../../../images/image1.jpg";
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
              Our partners are vital to advancing the mission of STEM Like a
              Girl as they provide critical financial, in-kind and volunteer
              support needed to best serve girls in our area. You can learn more
              about our sponsorship opportunities by clicking the button below
              or email us directly to talk about personalized opportunities.
            </p>
            <div className="text-button">
            <button className="btn-1 button">Sponsorship Packet</button>
            </div>
          </div>
        </div>
        <div className="reason-content">
          <div className="list-item">
            <p>When you partner with STEM Like a Girl, you:</p>
            <ul>
              <li>
                Have the opportunity to impact the lives of girls and their
                families in your community.
              </li>
              <li>
                Have the opportunity to impact the lives of girls and their
                families in your community.
              </li>
              <li>
                Have the opportunity to impact the lives of girls and their
                families in your community.
              </li>
              <li>
                Have the opportunity to impact the lives of girls and their
                families in your community.
              </li>
              <li>
                Have the opportunity to impact the lives of girls and their
                families in your community.
              </li>
            </ul>
          </div>
          <div className="reason-image">
          <img src={InvestmentImg} alt="ivestment-2" />
          </div>
        </div>
        <div className="partners">
          <div className="partner-1">
            <h1>Platinum Level Sponsors</h1>
            <img src={InvestmentImg} alt="first-partner" />
          </div>
          <div className="partner-1">
            <h1>Gold Level Sponsors</h1>
            <img src={InvestmentImg} alt="first-partner" />
          </div>
          <div className="partner-1">
            <h1>Silver Level Sponsors</h1>
            <img src={InvestmentImg} alt="first-partner" />
          </div>
        </div>
        <p>
          For questions or inquiries about becoming a sponsor, please email us
          at info@stemlikeagirl.org
        </p>
        <img src={LogoImg} alt="logo" />
        <p className="last">
          STEM Like a Girl reserves the right to decline affiliation with
          donors, sponsors, or partners (both corporate and individuals) at the
          discretion of the Board of Directors if the donor does not align with
          our mission and commitment to inclusion.
        </p>
      </div>
    </>
  );
};

export default Sponsors;
