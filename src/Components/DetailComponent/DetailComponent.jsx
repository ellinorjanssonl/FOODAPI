import React from 'react';
import './DetailComponent.css';

const DetailComponent = ({ selectedMeal }) => {
  if (!selectedMeal) return <div className='selectmeal'>Välj en maträtt för att se detaljer här.</div>;

  return (
    <div>
       <div className="detail-container">
      <h1>{selectedMeal.strMeal}</h1>
      <img className="imgmeal" src={selectedMeal.strMealThumb} alt={`Bild av ${selectedMeal.strMeal}`} />
      <h2><strong>Ingredienser:</strong></h2>
      <ul>
        {Object.keys(selectedMeal)
          .filter((key) => key.includes('strIngredient') && selectedMeal[key])
          .map((key) => (
            <li className="list"key={key}>{selectedMeal[key]}</li>
          ))}
      </ul>
      <h2><strong>Instruktioner:</strong></h2>
      <p>{selectedMeal.strInstructions}</p>
    </div>
    </div>
  );
};

export default DetailComponent;
