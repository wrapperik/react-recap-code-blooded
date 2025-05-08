import React, { useState } from "react";

const styles = {
  page: {
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  title: {
    fontSize: '32px',
    color: '#333',
    margin: 0
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    marginTop: '8px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '900px',
    margin: '0 auto'
  },
  columns: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px'
  },
  formContainer: {
    flex: '1 1 400px',
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  infoContainer: {
    flex: '1 1 300px',
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  field: {
    marginBottom: '16px'
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '#333'
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    resize: 'vertical'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  alert: {
    marginBottom: '16px',
    padding: '12px',
    backgroundColor: '#d4edda',
    color: '#155724',
    borderRadius: '4px'
  },
  infoBlock: {
    marginBottom: '20px'
  },
  infoHeading: {
    fontSize: '18px',
    marginBottom: '8px',
    color: '#333'
  },
  infoText: {
    margin: '4px 0',
    color: '#555'
  }
};

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

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
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
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>We'd love to hear from you—fill out the form below!</p>
      </header>

      <div style={styles.content}>
        {submitStatus.success && (
          <div style={styles.alert}>{submitStatus.message}</div>
        )}

        <div style={styles.columns}>
          {/* Form */}
          <div style={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              {['name', 'email', 'phone', 'company'].map(field => (
                <div key={field} style={styles.field}>
                  <label style={styles.label} htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    value={formState[field]}
                    onChange={handleChange}
                    required={['name', 'email'].includes(field)}
                    style={styles.input}
                  />
                </div>
              ))}

              <div style={styles.field}>
                <label style={styles.label} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  style={styles.textarea}
                />
              </div>

              <button type="submit" disabled={isSubmitting} style={styles.button}>
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div style={styles.infoContainer}>
            <div style={styles.infoBlock}>
              <h2 style={styles.infoHeading}>Email</h2>
              <p style={styles.infoText}>info@consultpark.com</p>
              <p style={styles.infoText}>support@consultpark.com</p>
            </div>
            <div style={styles.infoBlock}>
              <h2 style={styles.infoHeading}>Phone</h2>
              <p style={styles.infoText}>+1 (555) 123-4567</p>
              <p style={styles.infoText}>+1 (555) 987-6543</p>
            </div>
            <div style={styles.infoBlock}>
              <h2 style={styles.infoHeading}>Office Hours</h2>
              <p style={styles.infoText}>Mon – Fri: 9:00 AM – 6:00 PM (EST)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
