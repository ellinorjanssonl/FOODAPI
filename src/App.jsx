import React, { useState } from 'react';
import SearchComponent from './Components/SearchComponent/SearchComponent';
import DetailComponent from './Components/DetailComponent/DetailComponent';
import Header from './Components/Header/Header';
import './App.css';

// Detta är en funktionell komponent som renderar två komponenter: SearchComponent och DetailComponent.
// SearchComponent är en komponent som innehåller ett input-fält och en knapp för att söka efter maträtter.
// När användaren klickar på knappen så anropas en funktion som hämtar data från ett API och uppdaterar state-variabeln meals med den data som hämtats.
// DetailComponent är en komponent som visar detaljer om en vald maträtt.
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
