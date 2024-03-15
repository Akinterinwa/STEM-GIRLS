import React from 'react';
import './Donate.css';
import DonateImg from './images/pexels-liza-summer-6348119.jpg';
import { Link } from 'react-router-dom';

const Donate = () => {
    return (
        <>
            <div className="donation-hero">
                <h1>Ready to make a difference?
                    Donate today</h1>
            </div>
            <div className="donate">
                <div className="donate-container">
                    <div className="donate-image">
                        <img style={{objectFit: "cover"}} src={DonateImg} alt="donation" />
                    </div>
                    <div className="beginning-text">
                        <div className="donation-texts">
                            <p>As a 501(c)(3) nonprofit organization (ID #82-2953212), we depend on your tax-deductible donations to deliver impactful programming to girls around the world. Your generosity enables us to offer scholarships to low-income families and expand our workshops, reaching more girls in our community. Please consider making a donation today to ensure that all girls have the opportunity to build confidence, have fun, and discover the empowering world of STEM with us.</p>
                            <h4>Our Work Is Vital</h4>
                            <p>We’re well into the 21st century, but the gender gap in the tech industry remains:</p>
                            <ul style={{marginTop: "1rem"}}>
                                <li>*Only 5% of leadership positions in tech are held by women.</li>
                                <li>*20% of women over the age of 35 are still in junior positions.</li>
                                <li>*47% is the turnover rate for women (compared to 17% for men).</li>
                                <li>*Women experience a 3% pay gap across the board, while LGBTQ experience an 8% pay gap, and for black women this goes up to 11%.</li>
                            </ul>

                            <div className="background-text">
                                <p>Monthly gifts enable us to invest in specific areas, support our students with scholarships, and innovate within the classroom because we know we have your support</p>
                            </div>
                        </div>
                        <div className="paypal-donation-button">
                            <form action="https://www.paypal.com/donate" method="post" target="_top">
                                <input type="hidden" name="hosted_button_id" value="86R6FLRFPB2VA" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                <img alt="" border="0" src="https://www.paypal.com/en_NG/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                        </div>
                        <div className="redirection">
                            <p>You will be redirected to PayPal to make a secure donation directly from your PayPal account or from any major credit/debit card.</p>
                        </div>
                        <div className="sponsorship">
                            <h4>Interested in becoming a Corporate Sponsor? Click the button below to learn more!</h4>
                            <Link to='/sponsors'>
                            <button className="btn-1 button">Corporate Sponsorship</button>
                            </Link>
                            <p>*At Inspire STEM Girls, we prioritize your privacy and safeguard your personal information. Rest assured, we never share your details with third parties. By sharing your name, email, and phone number, you consent to receiving our newsletter, event reminders, and educational resources. You can opt out at any time</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Donate