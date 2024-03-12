import React, { useState } from 'react';
import './DetailComponent.css';

// Om det inte finns någon vald maträtt så visas en text som säger att användaren ska välja en maträtt först.
const DetailComponent = ({ selectedMeal }) => {
  if (!selectedMeal) return <div className='selectmeal'>Chose a meal to see more here!.</div>;

  
  const [rating, setRating] = useState(selectedMeal.rating);
  
  // Om det finns en vald maträtt så visas en bild på maträtten, namnet på maträtten, en lista med ingredienser och instruktioner för hur maträtten tillagas.
  // Jag använder Object.keys(selectedMeal) för att loopa igenom alla nycklar i objektet selectedMeal.
  // Om nyckeln innehåller strIngredient och värdet inte är null så visas värdet i en li-element.
  // Om nyckeln innehåller strInstructions så visas värdet i ett p-element.
  const ingredientsWithMeasurements = Object.keys(selectedMeal)
  .filter(key => key.includes('strIngredient') && selectedMeal[key])
  .map(key => {
    const measurementKey = `strMeasure${key.slice(13)}`; // Skapar nyckeln för motsvarande mått baserat på ingrediensnyckeln
    return { ingredient: selectedMeal[key], measurement: selectedMeal[measurementKey] || '' }; // Returnerar objekt med ingrediens och motsvarande mått
  });

  return (
    <div>
       <div className="detail-container">
      <h1>{selectedMeal.strMeal}</h1>
      <img className="imgmeal" src={selectedMeal.strMealThumb} alt={`Bild av ${selectedMeal.strMeal}`} />
      <div>
       
              <div className="rating-container">
          <p>Current grade: {rating}/5</p>
          <label htmlFor="rating"> Change grade:</label>
          <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
            </div>
      <div className='information'>
      <h2><strong>Ingredients:</strong></h2>
      <ul>
        {ingredientsWithMeasurements.map((item, index) => (
              <li className="list" key={index}>{item.ingredient} - {item.measurement}</li>
        ))}
          <h2><strong>Instructions:</strong></h2>
          <p className='instruktioner'>{selectedMeal.strInstructions}</p>

          <h2><strong>Video:</strong></h2>
          <iframe width="460" height="215" src={`https://www.youtube.com/embed/${selectedMeal.strYoutube.slice(-11)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </ul> 
    </div>
    </div>
    </div>
  );
};

export default DetailComponent;
