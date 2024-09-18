import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;

