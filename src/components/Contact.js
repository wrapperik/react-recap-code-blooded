// src/components/Contact.js

import React, { useState } from 'react';
import logoSrc from '../assets/Consult-Park-Logo-Full.png';
import './styles/contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitStatus({
        success: true,
        message: "Thank you for contacting us. We'll get back to you shortly."
      });
      setFormState({ name: '', email: '', phone: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <img src={logoSrc} alt="ConsultPark logo" className="contact-logo" />
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          We’d love to hear from you—fill out the form below!
        </p>
      </header>

      <div className="contact-content">
        {submitStatus.success && (
          <div className="contact-alert">{submitStatus.message}</div>
        )}

        <div className="contact-columns">
          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              {['name', 'email', 'phone', 'company'].map(field => (
                <div key={field} className="contact-field">
                  <label className="contact-label" htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    value={formState[field]}
                    onChange={handleChange}
                    required={['name', 'email'].includes(field)}
                    className="contact-input"
                  />
                </div>
              ))}

              <div className="contact-field">
                <label className="contact-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="contact-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-button"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-info-container">
            <div className="contact-info-block">
              <h2 className="contact-info-heading">Email</h2>
              <p className="contact-info-text">info@consultpark.com</p>
              <p className="contact-info-text">support@consultpark.com</p>
            </div>
            <div className="contact-info-block">
              <h2 className="contact-info-heading">Phone</h2>
              <p className="contact-info-text">+1 (555) 123-4567</p>
              <p className="contact-info-text">+1 (555) 987-6543</p>
            </div>
            <div className="contact-info-block">
              <h2 className="contact-info-heading">Office Hours</h2>
              <p className="contact-info-text">Monday – Friday: 9:00 AM – 6:00 PM (EST)</p>
              <p className="contact-info-text">Weekend: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
