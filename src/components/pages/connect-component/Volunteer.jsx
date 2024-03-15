import React from 'react';
import '../connect-component/Connect.css';
import VolunteerImg from './images/pexels-picha-stock-3894381.jpg';

const Volunteer = () => {
  return (
    <>
      <div className="volunteer-hero">
        <h1>Interested in joining our
          volunteer team?</h1>
      </div>
      <div className="volunteer">
        <h1 className='h1'>Empower the next generation in STEM. Become a mentor with us and make a tangible difference in young lives. Your expertise can inspire future innovators, guiding them through challenges and nurturing their potential. Together, let's shape a brighter future. Join now and be part of something truly impactful</h1>
        <div className="image-button">
          <div className="image">
            <img src={VolunteerImg} alt="volunteer" />
          </div>
          <button className="btn-1 button">
            become a mentor
          </button>
        </div>
        <div className="volunteer-content-1">
          <h1>Volunteer Opportunities</h1>
          <p>Are you someone who works in a STEM field looking to excite and inspire girls? Did you have a mentor who encouraged you to pursue your science or engineering interests? Be that person for young girls and their families by volunteering as a mentor with us! Or are you not in a STEM field but looking for an opportunity to impact girls and their families through fun hands-on science and engineering activities?

            Consider volunteering at one of our workshops! Volunteers keep our workshops running smoothly by helping lead activities, welcoming girls at registration, and encouraging them during the projects. Whatever your interest or time commitment is, we have a role for you! Both male and female volunteers are welcome. If you are interested in bringing STEM Like a Girl to your community, please check out our Start a STEM Like a Girl Site information page to learn more about what is involved.  </p>
        </div>

        <div className="event-buttons">
          <p>Have questions?  Click here to contact us or email volunteers@stemlikeagirl.org</p>
        </div>
        <div className="ending-content">
          <p>*STEM Like a Girl is dedicated to providing a welcoming, inclusive, and equitable environment for all employees, volunteers and workshop participants. We treat all people with respect and dignity and are committed to providing a safe environment for every person. We welcome people who identify as non-binary or gender nonconforming who wish to be in a female-identified environment.</p>
          <p>STEM Like a Girl values your privacy and keeps your personal information safe.  We will never share your information with anyone.  By providing your name, email and phone number you also provide consent to receive our newsletter, event reminders, and other educational resources. You can unsubscribe at any time.</p>
        </div>
      </div>
    </>
  )
}

export default Volunteer