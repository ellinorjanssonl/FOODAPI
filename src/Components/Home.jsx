import React from 'react';
import SearchComponent from './SearchComponent/SearchComponent';
import DetailComponent from './DetailComponent/DetailComponent';
import './Home.css';
import { useLocation } from 'react-router-dom';

const Home = ({ name, onSelectMeal, selectedMeal, meals }) => {
  const loc = useLocation();
  const category = loc.state ? loc.state.category : null;
  const selectedCategory = category ? category : null;

  return (
    <div className="app-container">
      <div className="search-detail-container">
        {name && <h1>Welcome {name}!</h1>}
        <SearchComponent onSelectMeal={onSelectMeal} selectedCategory={category} meals={meals} />
      </div>
      <div className="search-detail-container">
        <DetailComponent selectedMeal={selectedMeal} />
      </div>
    </div>
  );
}

export default Home;
