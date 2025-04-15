import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Result from './components/Result';
import Navbar from './components/Navbar';

function App() {
  const [suggestions, setSuggestions] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setSuggestions={setSuggestions} />} />
        <Route path="/result" element={<Result suggestions={suggestions} />} />
      </Routes>
    </Router>
  );
}

export default App;
