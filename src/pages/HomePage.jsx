import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';
import '../styles/HomePage.css';

const HomePage = () => {
  const [activeSecondaryButton, setActiveSecondaryButton] = useState('events');
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
        <button
          className="header-btn"
          onClick={() => navigate('/profile')}
        >
          🎁 Личный кабинет
        </button>
      </header>

      <div className="secondary-header">
        <button
          className={`secondary-header-btn ${activeSecondaryButton === 'events' ? 'active' : ''}`}
          onClick={() => { setActiveSecondaryButton('events'); navigate('/my-events'); }}
        >
          🎄 Мои мероприятия
        </button>
        <div className="button-divider"></div>
        <button
          className={`secondary-header-btn ${activeSecondaryButton === 'invitations' ? 'active' : ''}`}
          onClick={() => setActiveSecondaryButton('invitations')}
        >
          ❄️ Мои приглашения
        </button>
      </div>

      <main className="main-content">
        <button
          className="create-event-btn"
          onClick={() => navigate('/create-event')}
        >
          🎄 Создать мероприятие
        </button>
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

export default HomePage;
