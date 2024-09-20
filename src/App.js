// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
