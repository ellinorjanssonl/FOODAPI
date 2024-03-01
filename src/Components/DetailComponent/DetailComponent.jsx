import React from 'react';
import './DetailComponent.css';

const DetailComponent = ({ selectedMeal }) => {
  if (!selectedMeal) return <div>Välj en maträtt för att se detaljer.</div>;

  return (
    <div>
       <div className="detail-container">
      <h2>{selectedMeal.strMeal}</h2>
      <img src={selectedMeal.strMealThumb} alt={`Bild av ${selectedMeal.strMeal}`} />
      <p><strong>Kategori:</strong> {selectedMeal.strCategory}</p>
      <p><strong>Ursprung:</strong> {selectedMeal.strArea}</p>
      <p><strong>Instruktioner:</strong> {selectedMeal.strInstructions}</p>
    </div>
    </div>
  );
};

export default DetailComponent;
