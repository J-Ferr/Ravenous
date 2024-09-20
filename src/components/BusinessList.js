// src/components/BusinessList.js
import React from 'react';
import './BusinessList.css';

function BusinessList() {
  // Mock data for businesses
  const businesses = [
    { name: 'Pizza Place', address: '123 Pizza St', city: 'Pizza City', category: 'Pizza' },
    { name: 'Sushi House', address: '456 Sushi Rd', city: 'Sushi Town', category: 'Sushi' },
    { name: 'Burger Joint', address: '789 Burger Blvd', city: 'Burger City', category: 'Burgers' }
  ];

  return (
    <div className="business-list">
      {businesses.map((business, index) => (
        <div className="business" key={index}>
          <h2>{business.name}</h2>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{business.category}</p>
        </div>
      ))}
    </div>
  );
}

export default BusinessList;
