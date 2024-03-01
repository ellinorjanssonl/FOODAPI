import React, { useState } from 'react';
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
        <h2 className="search-info">Sök efter en maträtt här!</h2>
          <input type="text" className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button onClick={searchMeals}>Search</button>
          <ul className="meals-list">
            {meals && meals.map((meal) => (
              <li key={meal.idMeal} className="meal-item" onClick={() => onSelectMeal(meal)}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>{meal.strMeal}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default SearchComponent;
