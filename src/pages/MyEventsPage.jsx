import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';
import '../styles/MyEventsPage.css';

const MyEventsPage = () => {
  const [ownEvents, setOwnEvents] = useState([]);
  const [acceptedInvites, setAcceptedInvites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Загрузка своих мероприятий
    const created = JSON.parse(localStorage.getItem('events')) || [];
    setOwnEvents(created);
    // Загрузка принятых приглашений
    const invites = JSON.parse(localStorage.getItem('acceptedInvites')) || [];
    setAcceptedInvites(invites);
  }, []);

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

        {/* Мероприятия, где пользователь организатор */}
        {ownEvents.map(ev => (
          <div
            key={ev.id}
            className="event-card"
            onClick={() => navigate('/events')}
            style={{ cursor: 'pointer' }}
          >
            <h3>{ev.name} (организатор)</h3>
            <p>Дата жеребьёвки: {ev.drawDate}</p>
            <p>Дедлайн вручения подарков: {ev.deadline}</p>
          </div>
        ))}

        {/* Принятые приглашения */}
        {acceptedInvites.map(inv => (
          <div
            key={inv.id}
            className="event-card"
            onClick={() => navigate('/event/2')}
            style={{ cursor: 'pointer' }}
          >
            <h3>{inv.gameName || inv.name} (участник)</h3>
            <p>Дата жеребьёвки: {inv.drawDate}</p>
            <p>Дедлайн вручения подарков: {inv.deadline}</p>
          </div>
        ))}

        {/* Демо мероприятия */}
        <div className="event-card">
          <h3>Новый год с друзьями (организатор)</h3>
          <p>Дата жеребьёвки: 2025-12-25</p>
          <p>Дедлайн вручения подарков: 2025-12-30</p>
        </div>
        <div className="event-card">
          <h3>Офисный Тайный Санта</h3>
          <p>Дата жеребьёвки: 2025-12-20</p>
          <p>Дедлайн вручения подарков: 2025-12-28</p>
        </div>
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
