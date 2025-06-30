import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyEventsPage from './pages/MyEventsPage';
import ProfilePage from './pages/ProfilePage';
import CreateEventPage from './pages/CreateEventPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/my-events" element={<MyEventsPage />} />
      <Route path="/invitations" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/create-event" element={<CreateEventPage />} />
    </Routes>
  </Router>
);

export default App;
