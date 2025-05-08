import React from 'react';
import PropTypes from 'prop-types';

const FeatureCard = ({ title, features }) => {
  return (
    <div className="feature-card">
      <h2 className="feature-card-title">{title}</h2>
      <ul className="feature-card-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-card-item">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeatureCard;