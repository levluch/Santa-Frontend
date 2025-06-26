import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-events" element={<HomePage />} />
        <Route path="/invitations" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;