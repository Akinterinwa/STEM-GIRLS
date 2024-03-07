import React from 'react';
import '../workshops-components/Workshop.css';

const Location = () => {
  return (
    <>
        <div className="location-hero">
            <h1>Check Our Current Location</h1>
        </div>
        <div className="location">
          <h2>STEM Like a Girl currently offers workshops in the following locations:</h2>

          <div className="map">
          <iframe title="youtube link"  width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Inspire%20Stem%20Girls)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
          </div>
          <div className="cta">
            <p className='cta-link'>Click here for more information on our workshops in these areas</p>
            <p className='cta-link'>Click here to get involved as a volunteer in one of these areas</p>
            <p className='cta-link'>Click here for information on starting a STEM Like a Girl site in a new location</p>
          </div>
        </div>
    </>
  )
}

export default Location