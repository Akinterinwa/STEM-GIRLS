import React from 'react';
import FounderImg from '../../../images/founder.webp';

const Team = () => {
  return (
    <>
      <div className="team-hero">
        <h1>Our Team</h1>
      </div>
      <div className="team">
        <h3>Inspire STEM Girls (ISG) Board of Directors</h3>
        <div className="founders-container">
          <div className="founders-name">
            <h4>Oluwaseyi Adelusi – Founder and President</h4>
          </div>
          <div className="founders-content">
            <p><img src={FounderImg} alt="founder" className='founder-img' /> Hi I'm Oluwaseyi Adelusi, a Software Engineer with 6+ years experience that cuts across various field in tech. I have a first degree in Electrical & Electronics Engineering and Masters degree in Computer Science.</p>
          </div>
        </div>
        {/* <div className="founders-container">
          <div className="founders-name">
            <h4>Courtney Davis – Secretary</h4>
          </div>
          <div className="founders-content">
            <p><img src={FounderImg} alt="founder" className='founder-img' />  Courtney has wanted to design bridges since she was a little girl. She was inspired by Portland’s
              her undergraduate and masters in Civil Engineering from Washington State University. Go Cougs! During her
              career, she has had the privilege of working on some awesome projects like the new Panama Canal and the longest
              cable ferry in the world! Courtney also worked in New Orleans after Hurricane Katrina to protect the city from future
              hurricanes. When she is not designing steel and concrete structures at work, she enjoys visiting classrooms, building popsicle
              stick bridges and gummy bear domes.  Courtney is excited to be a part of the STEM Like a Girl to inspire the next generation of
              problem solvers!
            </p>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Team