// src/components/Business.js
import React from 'react';
import './Business.css';

function Business() {
  return (
    <div className="Business">
      <div className="image-container">
        <img
          src="https://via.placeholder.com/200"
          alt="Restaurant"
        />
      </div>
      <h2>Restaurant Name</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>123 Main St</p>
          <p>City</p>
          <p>State, ZIP</p>
        </div>
        <div className="Business-reviews">
          <h3>Category</h3>
          <h3 className="rating">4.5 stars</h3>
          <p>90 reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
