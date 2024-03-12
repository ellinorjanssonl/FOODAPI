import React, { useState, useEffect } from 'react';
import './SearchComponent.css';

const SearchComponent = ({ onSelectMeal, selectedCategory }) => {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMeals = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      if (!response.ok) throw new Error('Something went wrong!');
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      const searchMealsCategory = async () => {
        try {
          setIsLoading(true);
          setError(null);
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
          if (!response.ok) throw new Error('Something went wrong!');
          const data = await response.json();
          setMeals(data.meals || []);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      searchMealsCategory();
    }
  }, [selectedCategory]);

  return (
    <div className="search-container">
      <h2 className="search-info">Search for food here!</h2>
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter meal or category..."
      />
        <button onClick={searchMeals} disabled={isLoading}>Search</button>
        {error && <p className="error">{error}</p>}
        {isLoading ? (
        <p>Loading...</p>
        ) : (
       
        <ul className="meals-list">
          {meals && meals.map((meal) => (
            <li key={meal.idMeal} className="meal-item" onClick={() => onSelectMeal(meal)}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p>{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;

