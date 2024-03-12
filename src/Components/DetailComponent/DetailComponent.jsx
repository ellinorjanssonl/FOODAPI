import React, { useState, useEffect } from 'react';
import './DetailComponent.css';
import ReactStars from "react-rating-stars-component";

const DetailComponent = ({ selectedMeal }) => {
  if (!selectedMeal) return <div className='selectmeal'>Chose a meal to see more here!.</div>;

  const [rating, setRating] = useState(selectedMeal.rating || 0);
  const [mealById, setMealById] = useState(null);

  // Anropa denna funktion varje gång betyget ändras för att spara det nya betyget.
  useEffect(() => {
  }, [rating]);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const ingredientsWithMeasurements = Object.keys(selectedMeal)
    .filter(key => key.includes('strIngredient') && selectedMeal[key])
    .map(key => {
      const measurementKey = `strMeasure${key.slice(13)}`;
      return { ingredient: selectedMeal[key], measurement: selectedMeal[measurementKey] || '' };
    });

  return (
    <div className="detail-container">
      <h1>{selectedMeal.strMeal}</h1>
      <img className="imgmeal" src={selectedMeal.strMealThumb} alt={`Bild av ${selectedMeal.strMeal}`} />
      <div className="rating-container">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={30}
          activeColor="#4ec61b"
          value={rating}
        />
        <p>Current grade: {rating}/5</p>
      </div>
      <div className='information'>
        <h2><strong>Ingredients:</strong></h2>
        <ul>
          {ingredientsWithMeasurements.map((item, index) => (
            <li className="list" key={index}>{item.ingredient} - {item.measurement}</li>
          ))}
        </ul>
        <h2><strong>Instructions:</strong></h2>
        <p className='instruktioner'>{mealById ? mealById.strInstructions : selectedMeal.strInstructions}</p>
        <h2><strong>Video:</strong></h2>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${selectedMeal.strYoutube.slice(-11)}`} title="YouTube video player" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default DetailComponent;
