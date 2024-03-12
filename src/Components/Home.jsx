import React from 'react';
import SearchComponent from './SearchComponent/SearchComponent';
import DetailComponent from './DetailComponent/DetailComponent';
import './Home.css';

const Home = ({ name, onSelectMeal, selectedMeal, meals }) => {
  return (
    <div className="app-container">
      <div className="search-detail-container">
        {name && <h1>Welcome {name}!</h1>}
        <SearchComponent onSelectMeal={onSelectMeal} meals={meals} />
      </div>
      <div className="search-detail-container">
        <DetailComponent selectedMeal={selectedMeal} />
      </div>
    </div>
  );
}

export default Home;
