import React from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { MdSmartphone, MdMarkunread, MdLocationOn } from 'react-icons/md';
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    const user_id = 'user_I9XaO1Mbtp09ipbe49PM4';
    emailjs
      .sendForm('service_cewwx7w', 'template_g9rpswi', e.target, user_id)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section className='contact'>
      <h3 className='text-uppercase py-5'>contact details</h3>
      <div className='container'>
        <div className='row py-5 border-bottom'>
          <div className='col-md-4'>
            <div>
              <MdSmartphone className='icon' /> <br />
              <p>+880-17910-58552</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div>
              <MdLocationOn className='icon' /> <br />
              <p className='text-uppercase'>chittagong,bangladesh</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div>
              <MdMarkunread className='icon' /> <br />
              <p className='text-lowercase'>abdullahAlFahhim@gmail.com</p>
            </div>
          </div>
        </div>

        <div className='contact-foam'>
          <form className='contact-form' onSubmit={sendEmail}>
            <input type='hidden' name='contact_number' />
            <input
              type='text'
              name='user_name'
              className='user_name'
              placeholder='Your Name'
            />
            <input
              type='email'
              name='user_email'
              className='user_name'
              placeholder='Your Email'
            />
            <textarea
              name='message'
              className='user_name'
              placeholder='Your Massage'
            />
            <input type='submit' value='Send' className='submit-btn' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
