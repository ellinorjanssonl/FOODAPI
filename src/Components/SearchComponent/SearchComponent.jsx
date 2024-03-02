import React, { useState } from 'react';
import './SearchComponent.css';

// Detta är en funktionell komponent som tar emot en prop onSelectMeal.
// När användaren klickar på en maträtt i listan så anropas onSelectMeal med den valda maträtten som argument.
const SearchComponent = ({ onSelectMeal }) => {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);

  // Funktionen searchMeals anropas när användaren klickar på knappen "Search".
  // Funktionen hämtar data från ett API och uppdaterar state-variabeln meals med den data som hämtats.
  const searchMeals = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    setMeals(data.meals);
  };
  

  meals.forEach(meal => {
    meal.rating = Math.ceil(Math.random() * 5); // Ger ett betyg mellan 1 och 5
  });

  // Komponenten returnerar ett input-fält och en knapp för att söka efter maträtter.
  // Om state-variabeln meals innehåller data så renderas en lista med maträtter.
  // Varje maträtt i listan är en li-element som innehåller en bild och namnet på maträtten.
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
             <p>Betyg: {meal.rating}/5</p>
           </li>
          ))}
        </ul>
        </div>
      );
    };


export default SearchComponent;
