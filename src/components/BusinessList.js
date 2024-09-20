// src/components/BusinessList.js
import React from 'react';
import Business from './Business';
import styles from './BusinessList.module.css';

const businesses = [ /* your business data */ ];

function BusinessList() {
  return (
    <div className={styles.BusinessList}>
      {businesses.map(business => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
}

export default BusinessList;
