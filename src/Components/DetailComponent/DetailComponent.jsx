import React, { useState, useEffect } from 'react';
import './DetailComponent.css';
import ReactStars from "react-rating-stars-component";

const DetailComponent = ({ selectedMeal }) => {
  if (!selectedMeal) return <div className='selectmeal'>Choose a meal to see more here!</div>;

  // Hämta sparade betyg från localStorage vid initial laddning
  const [localRatings, setLocalRatings] = useState(() => {
    const savedRatings = localStorage.getItem('ratings');
    return savedRatings ? JSON.parse(savedRatings) : {};
  });

  // Uppdatera rating baserat på det sparade betyget för den valda maträtten, eller använd 0 som standardvärde
  const [rating, setRating] = useState(localRatings[selectedMeal.idMeal] || 0);

  // Uppdatera rating när vald maträtts betyg ändras
  useEffect(() => {
    setRating(localRatings[selectedMeal.idMeal] || 0);
  }, [selectedMeal, localRatings]);

  const ratingChanged = (newRating) => {
    setRating(newRating);
    const updatedRatings = {
      ...localRatings,
      [selectedMeal.idMeal]: newRating,
    };
    setLocalRatings(updatedRatings);
    localStorage.setItem('ratings', JSON.stringify(updatedRatings));
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
            <li key={index}>{item.ingredient} - {item.measurement}</li>
          ))}
        </ul>
        <h2><strong>Instructions:</strong></h2>
        <p className='instructions'>{selectedMeal.strInstructions}</p>
        {selectedMeal.strYoutube && (
          <div>
            <h2><strong>Video:</strong></h2>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${selectedMeal.strYoutube.slice(-11)}`} title="YouTube video player" allowFullScreen></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailComponent;



