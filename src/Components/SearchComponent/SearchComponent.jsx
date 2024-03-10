import React, { useState, useEffect } from 'react';
import './SearchComponent.css';

const SearchComponent = ({ onSelectMeal }) => {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);


  const searchMeals = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    setMeals(data.meals);
  };


  return (
    <div className="search-container">
      <h2 className="search-info">Search for food here!</h2>
      <input type="text" className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={searchMeals}>Search</button>
      <ul className="meals-list">
        {meals && meals.map((meal) => (
          <li key={meal.idMeal} className="meal-item" onClick={() => onSelectMeal(meal)}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
            <p>Grade: {Math.ceil(Math.random() * 5)}/5</p> {/* Uppdaterad för att minska beräkningarna */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
