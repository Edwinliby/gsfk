import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import Team from './Team/team';
import Navbar from './components/Navbar/navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
};

export default App;
