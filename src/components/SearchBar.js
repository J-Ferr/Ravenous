import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ${term} in ${location}`);
  }

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search Businesses" 
        value={term} 
        onChange={(e) => setTerm(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Where?" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Let's Go</button>
    </div>
  );
}

export default SearchBar;
