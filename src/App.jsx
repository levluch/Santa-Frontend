import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-events" element={<EventsPage />} /> {/* Здесь EventsPage */}
        <Route path="/invitations" element={<HomePage />} />
        {/* Добавьте остальные маршруты, если нужно */}
      </Routes>
    </Router>
  );
};

export default App;
