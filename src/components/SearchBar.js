// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for restaurants..." />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
