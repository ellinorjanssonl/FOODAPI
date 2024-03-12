import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LoginPage from './Components/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


const App = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [name, setName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
  };

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName('');
  };

  const clearState = () => {
    setSelectedMeal(null);
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} clearState={clearState}/>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} setName={setName} />} />
        <Route path="/" element={<Home name={name} onSelectMeal={handleSelectMeal} selectedMeal={selectedMeal}/>} />
      </Routes>
    </Router>
  );
};

export default App;

