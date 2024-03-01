import React, { useState } from 'react';
import SearchComponent from './Components/SearchComponent/SearchComponent';
import DetailComponent from './Components/DetailComponent/DetailComponent';
import Header from './Components/Header/Header';
import './App.css';

const App = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <>
      <Header /> 
    <div className="app-container">
      <div className="search-detail-container">
        <SearchComponent onSelectMeal={handleSelectMeal} />
      </div>
      <div className="search-detail-container">
        <DetailComponent selectedMeal={selectedMeal} />
      </div>
    </div>
    </>
  );
}

export default App;
