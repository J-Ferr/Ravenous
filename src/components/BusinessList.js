// src/components/BusinessList.js
import React from 'react';
import Business from './Business';
import './BusinessList.css';

// Hardcoded business data
const businesses = [
  {
    imageSrc: 'https://via.placeholder.com/200',
    name: 'Pizza Place',
    address: '123 Main St',
    city: 'Pizza Town',
    state: 'CA',
    zipCode: '90210',
    category: 'Pizza',
    rating: 4.5,
    reviewCount: 150,
  },
  {
    imageSrc: 'https://via.placeholder.com/200',
    name: 'Sushi Bar',
    address: '456 Elm St',
    city: 'Sushi City',
    state: 'NY',
    zipCode: '10001',
    category: 'Sushi',
    rating: 4.0,
    reviewCount: 90,
  },
  {
    imageSrc: 'https://via.placeholder.com/200',
    name: 'Burger Joint',
    address: '789 Oak St',
    city: 'Burgerville',
    state: 'TX',
    zipCode: '73301',
    category: 'Burgers',
    rating: 3.8,
    reviewCount: 120,
  }
];

function BusinessList() {
  return (
    <div className="BusinessList">
      {businesses.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  );
}

export default BusinessList;
