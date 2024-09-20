// src/App.js
import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    // You'll later implement the Yelp API call here
  };

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar onSearch={searchYelp} />
      <BusinessList />
    </div>
  );
}

export default App;
