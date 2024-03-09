import React from 'react';
import SearchComponent from './SearchComponent/SearchComponent';
import DetailComponent from './DetailComponent/DetailComponent';
import './Home.css';
 

const Home = ({ name, onSelectMeal, selectedMeal }) => {

  return (
    <div className="app-container">
      <div className="search-detail-container">
      {name && <h1>Welcome {name}!</h1>}
        <SearchComponent onSelectMeal={onSelectMeal} />
      </div>
      <div className="search-detail-container">
        <DetailComponent selectedMeal={selectedMeal} />
      </div>
    </div>
  );
}

export default Home;