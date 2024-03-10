import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home'; // Importera din nya Home-komponent
import LoginPage from './Components/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


const App = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [name, setName] = useState(''); 

  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (name) => {
    setIsLoggedIn(true); // Kalla på denna funktion när användaren loggar in
    setName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Kalla på denna funktion när användaren loggar ut
    setName('');
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} setName={setName} />} />
      <Route path="/" element={<Home name={name} onSelectMeal={handleSelectMeal} selectedMeal={selectedMeal} />} /> {/* Lägg till denna Route */}
      </Routes>
    </Router>
  );
}

export default App;

