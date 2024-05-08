// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Изменено здесь
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navigation from './pages/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes> 
          <Route path="/" element={<About />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
