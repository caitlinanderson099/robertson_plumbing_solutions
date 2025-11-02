import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaFacebook, FaInstagram} from 'react-icons/fa'
import { FaPhoneVolume } from "react-icons/fa6";
import SEO from '../components/SEO';
import CertificationSection from '../components/CertificationSection';

// ENV Imports
const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
const MAIN_TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_MAIN_TEMPLATE_ID
const REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_REPLY_TEMPLATE_ID
const USER_ID = import.meta.env.VITE_EMAIL_JS_USER_ID


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
  e.preventDefault();

  // Send email to YOU (the business)
  emailjs.sendForm(
    SERVICE_ID,      // your service ID
    MAIN_TEMPLATE_ID,     // your main notification template ID
    form.current,
    USER_ID
  ).then(
    (result) => {
      console.log('Message sent to business:', result.text);

      // Send auto-reply to the customer
      emailjs.sendForm(
        SERVICE_ID,  // same service ID
        REPLY_TEMPLATE_ID, // your new auto-reply template ID
        form.current,
        USER_ID
      ).then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('Auto-reply failed:', error.text);
        }
      );

    },
    (error) => {
      console.error('Error sending to business:', error.text);
      alert('Something went wrong. Please try again later.');
    }
  );
};


  const ContactForm = () => {
    return (
        <div className="contact-form-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <div className="label-group">
            <label>First Name <span>*</span><hr /></label>
            <input type="text" name="user_firstname" required />
          </div>

          <div className="label-group">
            <label>Last Name <span>*</span><hr /></label>
            <input type="text" name="user_lastname" required />
          </div>

          <div className="label-group">
            <label>Contact Email <span>*</span><hr /></label>
            <input type="email" name="user_email" required />
          </div>


          <div className="label-group">
            <label>Contact Number <span>*</span><hr /></label>
            <input type="number" name="user_number" required />
          </div>


          <div className="label-group">
            <label>Address (optional)<hr /></label>
            <input type="text" name="user_address" />
          </div>
                   
          <div className="label-group">
            <label>What service are you looking for? <span>*</span><hr /></label>
            <select name="service" required>
              <option value="">-- Select a Service --</option>
              <option value="job_quoting">Job Quoting</option>
              <option value="plumbing">Plumbing</option>
              <option value="emergency">Emergency / After Hours Plumbing</option>
              <option value="drainlaying">Drainlaying</option>
              <option value="central_heating">Central Heating</option>
              <option value="other">Other</option>
            </select>
          </div>

          
          <div className="label-group">
            <label>How did you hear about us? (optional)<hr /></label>
            <input type="text" name="referral_source" />
          </div>


          <div className="label-group">
            <label>Message <span>*</span> <hr /></label>
            <textarea name="user_message" required />
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    )
  };

  return (
    <>
    <SEO
        title="Contact Us | Robertson Plumbing Solutions"
        description="Professional plumbing services in NZ"
        keywords="plumbing, NZ, Robertson"
        author="Robertson Plumbing Solutions"
        image="http://localhost:5173/logo-images/logo.svg"
      />
      <div className="contact-content">

        <div className="left-side">
          <div className="header">
            <h1>Contact Us</h1>
            <hr />
          </div>
          <p>At Robertson Plumbing Solutions Ltd, we’re proud to provide reliable, high-quality plumbing services across the Wellington region.
          Whether you need help with residential plumbing, drainlaying, central heating, or emergency repairs, our team is here to make the process simple and stress-free. We value clear communication, honest quoting, and workmanship that stands the test of time.</p>

          <p>Get in touch with us for a free, non-obligation quote today.</p>

           <div className="socials">
            <FaFacebook/>
            <FaInstagram/>
            <FaEnvelope/>
            <FaPhoneVolume/>
          </div>

        </div>

        <div className="right-side">
          <ContactForm/>
        </div>
        {/* <CertificationSection/> */}
      </div>
    </>
  )
}

export default Contact
