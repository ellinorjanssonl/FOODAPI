import React, { useState } from 'react';
import './DetailComponent.css';

// Om det inte finns någon vald maträtt så visas en text som säger att användaren ska välja en maträtt först.
const DetailComponent = ({ selectedMeal }) => {
  if (!selectedMeal) return <div className='selectmeal'>Välj en maträtt för att se detaljer här.</div>;
  
  const [rating, setRating] = useState(selectedMeal.rating);
  // Om det finns en vald maträtt så visas en bild på maträtten, namnet på maträtten, en lista med ingredienser och instruktioner för hur maträtten tillagas.
  // Jag använder Object.keys(selectedMeal) för att loopa igenom alla nycklar i objektet selectedMeal.
  // Om nyckeln innehåller strIngredient och värdet inte är null så visas värdet i en li-element.
  // Om nyckeln innehåller strInstructions så visas värdet i ett p-element.
  return (
    <div>
       <div className="detail-container">
      <h1>{selectedMeal.strMeal}</h1>
      <img className="imgmeal" src={selectedMeal.strMealThumb} alt={`Bild av ${selectedMeal.strMeal}`} />
      <div>
              <div className="rating-container">
          <p>Aktuellt Betyg: {rating}/5</p>
          <label htmlFor="rating"> Ändra betyg:</label>
          <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
            </div>
      <h2><strong>Ingredienser:</strong></h2>
      <ul>
        {Object.keys(selectedMeal)
          .filter((key) => key.includes('strIngredient') && selectedMeal[key])
          .map((key) => (
            <li className="list"key={key}>{selectedMeal[key]}</li>
          ))}
      </ul>
      <h2 ><strong>Instruktioner:</strong></h2>
      <p className='instruktioner'>{selectedMeal.strInstructions}</p>
    </div>
    </div>
  );
};

export default DetailComponent;
