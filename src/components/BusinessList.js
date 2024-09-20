// src/components/BusinessList.js
import React from 'react';
import Business from './Business';
import './BusinessList.css';

function BusinessList() {
  return (
    <div className="BusinessList">
      <Business />
      <Business />
      <Business />
    </div>
  );
}

export default BusinessList;
