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
        Consult Park is more than just an outsourcing company—we’re your growth partner. Our
mission is to bridge businesses with skilled professionals, helping them scale faster, work
smarter, and achieve more.
With a network of highly trained professionals, cutting-edge tools, and a client-first approach,
we deliver solutions that enhance productivity, efficiency, and profitability.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-section">
        <h2>Mission & Vision</h2>
        <p>Our mission is simple: Empower businesses with seamless outsourcing solutions that
drive success.
We envision a world where businesses of all sizes can access high-quality, cost-effective talent
without the constraints of location or infrastructure.</p>
        <p>
          <strong>Mission:</strong> Empower businesses globally by connecting them with skilled virtual teams, driving
efficiency, collaboration, and growth, while creating impactful career opportunities for
professionals
        </p>
        <p>
          <strong>Vision:</strong> To become the premier outsourcing partner, transforming global workforce solutions and
          fostering sustainable growth and innovation for businesses and communities worldwide.
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