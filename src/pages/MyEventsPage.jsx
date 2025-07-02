import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';
import '../styles/MyEventsPage.css';

const mockEvents = [
  { id: 1, name: 'Новый год с друзьями (организатор )', date: '2025-12-25', route: '/events' },
  { id: 2, name: 'Офисный Тайный Санта', date: '2025-12-20', route: '/event/2' },
];
 
const MyEventsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="secret-santa-container">
      <ul className="snowflakes" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => <li key={i} className="snowflake">❅</li>)}
      </ul>
      <ul className="twinkles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => <li key={i} className="twinkle">✨</li>)}
      </ul>

      <header className="main-header">
        <h1 className="header-title">🎅 Тайный Санта 🎁</h1>
        <button className="header-btn" onClick={() => navigate('/')}>🏠 Главная</button>
      </header>

      <main className="events-list">
        <h2>Мои мероприятия</h2>
        {mockEvents.map(ev => (
          <div
            key={ev.id}
            className="event-card"
            onClick={() => navigate(ev.route)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{ev.name}</h3>
            <p>Дата жеребьёвки: {ev.date}</p>
          </div>
        ))}
      </main>

      <footer className="footer">
        <div className="santa-run">
          <img src="/images/santa-reindeer.gif" alt="Santa on sleigh" />
        </div>
        <p>© 2025 Тайный Санта. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default MyEventsPage;
