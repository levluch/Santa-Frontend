import React, { useState } from 'react';
import '../styles/HomePage.css';

// Эмодзи для праздника
const SnowEmoji = () => <span className="emoji emoji-snow">❄️</span>;
const TreeEmoji = () => <span className="emoji emoji-tree">🎄</span>;
const GiftEmoji = () => <span className="emoji emoji-gift">🎁</span>;

const HomePage = () => {
  const [activeSecondaryButton, setActiveSecondaryButton] = useState('events');

  return (
    <div className="secret-santa-container">
      <ul className="snowflakes" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => <li key={i} className="snowflake">❅</li>)}
      </ul>
      <ul className="twinkles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => <li key={i} className="twinkle">✨</li>)}
      </ul>

      <header className="main-header">
        <div className="header-left-section">
          <h1 className="header-title">
            🎅 Тайный Санта 🎁
          </h1>
        </div>
        <div className="header-right-section">
          <button className="profile-btn">
            🎁 Личный кабинет
          </button>
        </div>
      </header>

      <div className="secondary-header">
        <button
          className={`secondary-header-btn ${activeSecondaryButton === 'events' ? 'active' : ''}`}
          onClick={() => setActiveSecondaryButton('events')}
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
        <button className="create-event-btn">
          🎄 Создать мероприятие
        </button>
      </main>

      <footer className="footer">
        <div className="santa-run">
          {/* для гиф */}
          <img src="/images/santa-reindeer.gif" alt="Santa on sleigh" />
        </div>
        <p>© 2025 Тайный Санта. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default HomePage;