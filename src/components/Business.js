import React from 'react';
import './Business.css';

const Business = ({ name, address, city, state, zipCode, category, rating, reviewCount }) => {
  return (
    <div className="business">
      <h2>{name}</h2>
      <div className="business-info">
        <p>{address}</p>
        <p>{city}, {state} {zipCode}</p>
        <p>Category: {category}</p>
        <p>Rating: {rating} stars</p>
        <p>{reviewCount} reviews</p>
      </div>
    </div>
  );
}

export default Business;
