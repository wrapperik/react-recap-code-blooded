import React from 'react';
import '../components/styles/About.css'; 

function About() {
  return (
    <div className="container mt-5">
      <h1>About Us</h1>
      
      {/* Who We Are Section */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Consult Park is more than just an outsourcing company—we’re your growth partner, 
          dedicated to helping you achieve your business goals with tailored solutions.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-section">
        <h2>Mission & Vision</h2>
        <p>
          <strong>Mission:</strong> To empower businesses with innovative outsourcing solutions 
          that drive efficiency and growth.
        </p>
        <p>
          <strong>Vision:</strong> To be the global leader in outsourcing, recognized for 
          excellence, integrity, and innovation.
        </p>
      </section>

      {/* Values Grid Section */}
      <section className="about-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <span className="value-icon">💡</span>
            <h3>Excellence</h3>
            <p>We strive for the highest standards in everything we do.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🤝</span>
            <h3>Integrity</h3>
            <p>We conduct business with honesty and transparency.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🚀</span>
            <h3>Innovation</h3>
            <p>We embrace creativity to deliver cutting-edge solutions.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🌍</span>
            <h3>Global Reach</h3>
            <p>We connect businesses worldwide with top-tier talent.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;