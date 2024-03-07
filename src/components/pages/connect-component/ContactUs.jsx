import React, { useEffect, useState } from 'react';
import '../connect-component/Connect.css';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const [values, setValues] = useState({
      full_name: '',
      email:'',
      role:'',
      message:'',
      phone_number:''
    });

    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.send('service_75m0v02', 'template_i4d4lmi', values, 'yx9YL1U5LHFB4aTo0')
      .then(response => {
        console.log('SUCCESS', response);
        setValues({
          full_name:'',
          email:'',
          role:'',
          message:'',
          phone_number:''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
    }

    useEffect(() => {
      if(status === 'SUCCESS'){
        setTimeout(() => {
          setStatus('');
        }, 3000);
      }
    }, [status]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
    }

  return (
    <>
      <div className="contact-hero">
        <h1>Contact Us</h1>
      </div>
      <div className="contact">
        <div className="contact-texts">
          <h1>Questions or comments?  We would love to hear from you!</h1>
          <p>Email us at info@stemlikeagirl.org or complete the form below to contact STEM Like a Girl.</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
          {status &&  renderAlert()}
            <div className="input-field">
              <div className="label-1">
                <label className='input-fullname' htmlFor="">Full Name</label>
                <input onChange={handleChange} className='fullname-text' type="text" required label="Full Name" name='full_name' placeholder='John Doe' />
              </div>
              <div className="label-1">
                <label className='input-fullname' htmlFor="">Email</label>
                <input value={values.email} onChange={handleChange} className='fullname-text' label='E-Mail' name='email' required placeholder='john@example.com'/>
              </div>
              <div className="label-1">
                <label className='input-fullname' htmlFor="">Phone Number</label>
                <input  onChange={handleChange} className='fullname-text' type="text" name='phone_number' label='Phone Number' required placeholder=''/>
              </div>
              <div className="text-area">
                <label className='textarea-label' htmlFor="">Your message here</label>
              <textarea value={values.message} className='textarea-box' onChange={handleChange} rows="4" name="message" label='Your message here'></textarea>
              </div>
              <div className="send-button">
                <button type='submit'
                 className="btn-1 button">
                  SUBMIT
                </button> 
              </div>
            </div>
          </form>
        </div>
        <div className="ending-p">
        <p>*STEM Like a Girl values your privacy and keeps your personal information safe.  We will never share your information with anyone.  By providing your name, email and phone number you also provide consent to receive our newsletter, event reminders, and other educational resources. You can unsubscribe at any time.</p>
          </div>
      </div>
    </>
  )
};

const renderAlert = () =>{
  return(
  <div className="alert">
    <p>your message has been submitted successfully</p>
  </div>
  )
}

export default ContactUs;
