import React from 'react';
import '../styles/index.css';
import '../styles/EventPage.css';

const EventPage = () => {
  // Пример данных
  const recipient = {
    name: "Ирина Ваг",
    tg: "ira_vag"
  };
 
  const wishlist = [
    "Книга 1990-х",
    "Набор для рисования",
    "Подарочная карта в книжный магазин"
  ];

  return (
    <div className="secret-santa-container">
      <header className="main-header">
        <h1 className="header-title">🎅 Тайный Санта 🎁</h1>
        <button onClick={() => window.location.href = '/'} className="header-btn">
          🏠 Главная
        </button>
      </header>

      <main className="main-content">
        <section className="recipient-section">
          <h2>Получатель и его вишлист</h2>
          <div className="recipient-info">
            <p><strong>Имя:</strong> {recipient.name}</p>
            <p><strong>Tg:</strong> {recipient.tg}</p>
          </div>
        </section>

        <section className="wishlist-section">
          <ul className="wishlist">
            {wishlist.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Тайный Санта. Все права защищены. Сделано с ❄ и 🎁</p>
      </footer>
    </div>
  );
};

export default EventPage;