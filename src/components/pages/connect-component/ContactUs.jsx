import '../connect-component/Connect.css';

const ContactUs = () => {
  return (
    <>
      <div className="contact-hero">
        <h1>Contact Us</h1>
      </div>
      <div className="contact">
        <div className="contact-texts">
          <p>Email us at <span className='email'>inspirestemgirl@gmail.com</span> or complete the form below to contact Inspire STEM Girls</p>
        </div>
        <div className="contact-form">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfUXpMPEY2ZVz2v8P7bl4YwJYt3FmlhXmGw_AxKHWhQyWBXyg/viewform?embedded=true" width="640" height="957" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
        <div className="ending-p">
          <p>*At Inspire STEM Girls (ISG), we prioritize your privacy and safeguard your personal information. Rest assured, we never share your details with third parties. By sharing your name, email, and phone number, you consent to receiving our newsletter, event reminders, and educational resources. You can opt out at any time</p>
        </div>
      </div>
    </>
  )
};


export default ContactUs;
