import React from 'react';
import './EventPage.css';

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
    <div className="eventPage">
      <header className="header">
        <h1>Мои мероприятия</h1>
        <button onClick={() => window.location.href = '/'} className="home-btn">
          Главная
        </button>
      </header>

      <main className="content">
        <section className="recipient-section">
          <h2>Получатель</h2>
          <div className="recipient-info">
            <p><strong>Имя:</strong> {recipient.name}</p>
            <p><strong>Tg:</strong> {recipient.tg}</p>
          </div>
        </section>

        <section className="wishlist-section">
          <h2>Вишлист получателя</h2>
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