import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import History from './pages/History';
import Team from './pages/Team';
import Values from './pages/Values';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <Router>

        <Navbar />
        <button onClick={toggleDarkMode} className="toggle-button">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/team" element={<Team />} />
          <Route path="/values" element={<Values />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
