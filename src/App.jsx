import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyEventsPage from './pages/MyEventsPage';
import ProfilePage from './pages/ProfilePage';
import CreateEventPage from './pages/CreateEventPage';
import EventsPage from './pages/EventsPage';      // Страница "Новый год с друзьями"
import EventPage from './pages/EventPage';        // Страница "Офисный Тайный Санта"
import InvitationsPage from './pages/InvitationsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/my-events" element={<MyEventsPage />} />
      <Route path="/invitations" element={<InvitationsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/create-event" element={<CreateEventPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/event/:id" element={<EventPage />} />
    </Routes>
  </Router>
);

export default App;
