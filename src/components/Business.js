// src/components/Business.js
import React from 'react';
import styles from './Business.module.css';

function Business({ business }) {
  return (
    <div className={styles.Business}>
      <div className={styles['image-container']}>
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <h2>{business.name}</h2>
      <div className={styles['Business-information']}>
        <div className={styles['Business-address']}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{business.state}, {business.zipCode}</p>
        </div>
        <div className={styles['Business-reviews']}>
          <h3>{business.category}</h3>
          <h3 className={styles.rating}>{business.rating} stars</h3>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
