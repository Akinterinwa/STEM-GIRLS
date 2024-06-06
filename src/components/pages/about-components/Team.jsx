import React from 'react';
import FounderImg from '../../../images/Adelusi_Oluwaseyi_928-0444-retouched.jpg';

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
            <p><img src={FounderImg} alt="founder" className='founder-img' />
              Oluwaseyi Adelusi , Software Engineer & STEM Advocate is a passionate software engineer dedicated to building innovative solutions and inspiring the next generation of female leaders in STEM (Science, Technology, Engineering, and Mathematics). With a deep-rooted love for technology and a fervent belief in the power of diversity, she is on a mission to break down barriers and empower young girls to pursue their dreams in the tech industry.
              Armed with a Bachelor's degree in Electrical and Electronics Engineering, Master’s in Computer Science. She embarked on her career journey with a commitment to excellence and a drive to make a difference. Over the years, she has honed her skills in software development, specializing in automating cloud software delivery cycle and has contributed to cutting-edge projects that have transformed industries.
              Beyond her technical prowess, Oluwaseyi is a staunch advocate for diversity and inclusion in STEM fields. She actively mentors aspiring young girls, sharing her experiences and insights to help them navigate the challenges and opportunities in the tech world. Through workshops, talks, and community outreach programs, she strives to foster a supportive environment where girls feel empowered to pursue their passions in technology.
              Recognized for her dedication and impact, Oluwaseyi has been featured in media outlets and has received accolades for her contributions to the tech community. Whether she's coding a groundbreaking software solution or inspiring the next generation of innovators, Oluwaseyi is committed to making a lasting impact and creating a more inclusive future for all.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team