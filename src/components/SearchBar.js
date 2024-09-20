// src/components/SearchBar.js
import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  function renderSortByOptions() {
    return Object.keys(sortByOptions).map(option => {
      const sortByValue = sortByOptions[option];
      return (
        <li
          key={sortByValue}
          className={sortBy === sortByValue ? styles.active : ''}
          onClick={() => handleSortByChange(sortByValue)}
        >
          {option}
        </li>
      );
    });
  }

  function handleTermChange(event) {
    setTerm(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSortByChange(sortOption) {
    setSortBy(sortOption);
  }

  function handleSearch(event) {
    onSearch(term, location, sortBy);
    event.preventDefault();
  }

  return (
    <div className={styles.SearchBar}>
      <div className={styles['SearchBar-sort-options']}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles['SearchBar-fields']}>
        <input
          placeholder="Search Businesses"
          value={term}
          onChange={handleTermChange}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className={styles['SearchBar-submit']}>
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
}

export default SearchBar;
