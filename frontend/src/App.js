// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import MyPantry from './components/MyPantry/MyPantry';
import MySearch from './components/MySearch/MySearch';
import MyRecipes from './components/MyRecipes/MyRecipes';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-pantry" element={<MyPantry />} />
          <Route path="/my-search" element={<MySearch />} />
          <Route path="/my-recipes" element={<MyRecipes />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;