import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaPhoneVolume } from "react-icons/fa6";
import SEO from '../components/SEO';
import CertificationSection from '../components/CertificationSection';
import Footer from '../components/Footer';

// Toastify imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ENV Imports
const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID
const MAIN_TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_MAIN_TEMPLATE_ID
const REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_REPLY_TEMPLATE_ID
const USER_ID = import.meta.env.VITE_EMAIL_JS_USER_ID

const Contact = () => {
  const form = useRef()

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    SERVICE_ID,
    MAIN_TEMPLATE_ID,
    form.current,
    USER_ID
  ).then(
    (result) => {
      console.log('Message sent to business:', result.text);

      emailjs.sendForm(
        SERVICE_ID,
        REPLY_TEMPLATE_ID,
        form.current,
        USER_ID
      ).then(
        () => {
          toast("🛠️ Thank you! We've received your enquiry and will be in touch soon.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,  // Removed progress bar
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
              background: '#F9F9F9',           // Clean background
              color: '#111827',                // Dark text
              borderLeft: '6px solid #FDDF48', // Yellow accent
              fontWeight: 600,
              borderRadius: '6px',
              padding: '16px 24px',
              fontFamily: 'League Spartan, sans-serif',
              boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
              letterSpacing: '0.5px',
            },
            icon: false, // Using emoji instead of default icon
          });
          form.current.reset();
        },
        (error) => {
          console.error('Auto-reply failed:', error.text);
          toast("🛠️ Thanks! We've received your enquiry.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            style: {
              background: '#F9F9F9',
              color: '#111827',
              borderLeft: '6px solid #FDDF48',
              fontWeight: 600,
              borderRadius: '6px',
              padding: '16px 24px',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
              letterSpacing: '0.5px',
            },
            icon: false,
          });
        }
      );

    },
    (error) => {
      console.error('Error sending to business:', error.text);
      toast.error("⚠️ Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        style: {
          background: '#F3F4F6',           // Gray for errors
          color: '#111827',
          borderLeft: '6px solid #FDDF48',
          fontWeight: 600,
          borderRadius: '6px',
          padding: '16px 24px',
          fontFamily: 'Inter, sans-serif',
          boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
          letterSpacing: '0.5px',
        },
      });
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
              <option value="Job quoting">Job quoting</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Emergency/After hours">Emergency / After Hours Plumbing</option>
              <option value="Drainlaying">Drainlaying</option>
              <option value="Central heating">Central heating</option>
              <option value="Other">Other</option>
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
            <a href="https://www.instagram.com/robertson_plumbing_nz/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:ben@robertsonplumbing.co.nz">
              <FaEnvelope />
            </a>
            <a href="tel:0273651682">
              <FaPhoneVolume />
            </a>
          </div>
        </div>

        <div className="right-side">
          <ContactForm/>
        </div>
      </div>
      <CertificationSection/>
      <Footer/>

      {/* Toast container */}
      <ToastContainer />
    </>
  )
}

export default Contact
