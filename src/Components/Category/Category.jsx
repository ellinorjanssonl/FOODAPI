import React, { useState, useEffect } from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    setCategories(data.categories);
  };

  const fetchMeals = async (categoryName) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    const data = await response.json();
    setMeals(data.meals);
  };

  const handleCategorySelect = async () => {
    navigate('/'); // Navigera eventuellt efter att du har hanterat måltidslistan
  };

  useEffect(() => {
    fetchCategories();
  }, []);


  return (
    <div>
      <h1 className='Category'>Categories</h1>
      <ul className='Category-list'>
        {categories.map((category) => (
          <li key={category.idCategory} className="meal-item-category" onClick={() => handleCategorySelect()}>
            <h2 className='category-h1'>{category.strCategory}</h2>
            <img className='category-img'src={category.strCategoryThumb} alt={category.strCategory} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;


