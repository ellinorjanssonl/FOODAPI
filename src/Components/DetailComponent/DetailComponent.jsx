import React, { useState, useEffect } from 'react';
import './DetailComponent.css';
import ReactStars from 'react-rating-stars-component';

const DetailComponent = ({ selectedMeal }) => {
  if (!selectedMeal) {
    return <div className='selectmeal'>Choose a meal to see more here!</div>;
  }

  // Hämta sparade betyg från localStorage
  const [localRatings, setLocalRatings] = useState(() => {
    const savedRatings = localStorage.getItem('ratings');
    return savedRatings ? JSON.parse(savedRatings) : {};
  });

  // Sätt betyg för nuvarande maträtt baserat på det sparade betyget eller 0 om det inte finns något
  const [rating, setRating] = useState(localRatings[selectedMeal.idMeal] || 0);

  // Uppdatera betyget när en ny maträtt väljs
  useEffect(() => {
    setRating(localRatings[selectedMeal.idMeal] || 0);
  }, [selectedMeal, localRatings]);

  // Hantera betygsändring och uppdatera localStorage
  const ratingChanged = (newRating) => {
    const updatedRatings = { ...localRatings, [selectedMeal.idMeal]: newRating };
    setLocalRatings(updatedRatings);
    localStorage.setItem('ratings', JSON.stringify(updatedRatings));
    setRating(newRating);
  };

  // Extrahera ingredienser och mått
  const ingredientsWithMeasurements = Object.keys(selectedMeal)
    .filter(key => key.includes('strIngredient') && selectedMeal[key])
    .map(key => ({
      ingredient: selectedMeal[key],
      measurement: selectedMeal[`strMeasure${key.slice(13)}`] || '',
    }));

  return (
    <div className="detail-container">
      <h1>{selectedMeal.strMeal}</h1>
      <img className="imgmeal" src={selectedMeal.strMealThumb} alt={`Bild av ${selectedMeal.strMeal}`} />

      <div className="rating-container">
        <ReactStars count={5} onChange={ratingChanged} size={30} activeColor="#4ec61b" value={rating} />
        <p>Current grade: {rating}/5</p>
      </div>

      <div className='information'>
        <h2><strong>Ingredients:</strong></h2>
        <ul>{ingredientsWithMeasurements.map((item, index) => <li key={index}>{item.ingredient} - {item.measurement}</li>)}</ul>

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




