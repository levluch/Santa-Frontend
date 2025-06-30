import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="secret-santa-container">
      <ul className="snowflakes" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <li key={i} className="snowflake">❅</li>
        ))}
      </ul>
      <ul className="twinkles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <li key={i} className="twinkle">✨</li>
        ))}
      </ul>

      <header className="main-header">
        <h1 className="header-title">🎅 Тайный Санта 🎁</h1>
        <button className="header-btn" onClick={() => navigate('/')}>
          🏠 Главная
        </button>
      </header>

      <main className="profile-content">
        <h2>Анкета участника</h2>
        <form className="profile-form">
          <label>Фамилия <input type="text" /></label>
          <label>Имя <input type="text" /></label>
          <label>Отчество <input type="text" /></label>
          <label>Год рождения <input type="number" /></label>
          <label>Замужем/Женат <input type="checkbox" /></label>
          <label>Интересы <textarea /></label>

          <div className="status">
            Статус в игре: <strong>Ожидание жеребьёвки</strong>
          </div>
        </form>
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

export default ProfilePage;
