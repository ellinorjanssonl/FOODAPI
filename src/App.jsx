import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import Category from './Components/Category/Category';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


const App = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [name, setName] = useState('');
  const [meals, setMeals] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
  };

  const handleCategorySelect = async (categoryName) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    const data = await response.json();
    setMeals(data.meals);
  };

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName('');
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} setName={setName} />} />
        <Route path="/" element={<Home name={name} onSelectMeal={handleSelectMeal} selectedMeal={selectedMeal}/>} />
        <Route path="/category" element={<Category onSelectCategory={handleCategorySelect} onSelectMeal={handleSelectMeal}  />} />
      </Routes>
    </Router>
  );
};

export default App;

