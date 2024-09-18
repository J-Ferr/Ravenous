import React from 'react';
import Business from './Business';
import './BusinessList.css';

const businesses = [
  {
    name: "Joe's Coffee",
    address: '123 Main St',
    city: 'Orlando',
    state: 'FL',
    zipCode: '32812',
    category: 'Coffee Shop',
    rating: 4.5,
    reviewCount: 90
  },
  {
    name: "Sushi Place",
    address: '456 Sushi Way',
    city: 'Orlando',
    state: 'FL',
    zipCode: '32821',
    category: 'Sushi',
    rating: 4.0,
    reviewCount: 120
  },
  { name: "Hammered Pizza",
    address: '111 Sauce Ave.',
    city: 'Orlando',
    state: 'FL',
    zipCode: '32812',
    category: 'Pizza',
    rating: 4.4,
    reviewCount: 85
},
{ name: "El Sombrerro",
    address: '2800 Picante Way',
    city: 'Hometown',
    state: 'FL',
    zipCode: '32821',
    category: 'Mexican',
    rating: 4.7,
    reviewCount: 137
}
];

const BusinessList = () => {
  return (
    <div className="business-list">
      {businesses.map((business, index) => (
        <Business key={index} {...business} />
      ))}
    </div>
  );
}

export default BusinessList;
