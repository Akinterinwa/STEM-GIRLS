import React from 'react';
import './Donate.css';
import DonateImg from '../../../images/image1.jpg';

const Donate = () => {
    return (
        <>
            <div className="donation-hero">
                <h1>DONATE</h1>
            </div>
            <div className="donate">
                <div className="donate-container">
                    <div className="donate-image">
                        <img src={DonateImg} alt="donation" />
                    </div>
                    <div className="beginning-text">
                        <div className="donation-texts">
                            <p>As a 501(c)(3) nonprofit organization (ID #82 -2953212), we rely on your tax deductible donations to provide programming to girls in Oregon and Washington. Your support allows us to offer scholarships to low-income families and to continue expanding our workshops to serve as many girls as possible. Please consider making a donation so that all girls can build confidence, have fun, and learn what it means to STEM Like a Girl!</p>
                            <h4>Program Statistics since 2018:</h4>
                            <ul>
                                <li>Served over 550 girls in 3rd – 5th grade</li>
                                <li>Hosted 25 workshops in Oregon and Washington</li>
                                <li>Awarded over $4,600 in financial assistance to participants to cover workshop fees</li>
                                <li>97% of participants who completed our survey said their daughter became more excited about STEM activities after attending a workshop and 99% would recommend our program to a friend</li>
                            </ul>

                            <div className="background-text">
                                <p>As an added incentive, our Board of Directors has pledged to match all donations that come in before December 31st, up to $2,000. This will double the impact of your donation today!</p>
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
                                <p>If you prefer to send a cheque, our mailing address is: P.O. Box 80174 Portland, OR 97280</p>
                            </div>
                            <div className="sponsorship">
                                <h4>Interested in becoming a Corporate Sponsor? Click the button below to learn more!</h4>
                                <button className="btn-1 button">Corporate Sponsorship</button>
                                <p>*STEM Like a Girl values your privacy and keeps your personal information safe.  We will never share your information with anyone.  By providing your name, email and phone number you also provide consent to receive our newsletter, event reminders, and other educational resources. You can unsubscribe at any time.</p>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Donate