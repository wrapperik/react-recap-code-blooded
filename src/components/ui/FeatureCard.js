import React from 'react';
import PropTypes from 'prop-types';
import '../styles/FeatureCard.css';

const FeatureCard = ({ features }) => {
  return (
    <div className="feature-card-grid">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

FeatureCard.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeatureCard;