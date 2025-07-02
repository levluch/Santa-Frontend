import React from 'react';
import './InvitationsPage.css';

const InvitationsPage = () => {
  // Пример данных приглашений
  const invitations = [
    { id: 1, gameName: 'Рождественская вечеринка', organizer: 'Анна' },
    { id: 2, gameName: 'Корпоративный Тайный Санта', organizer: 'Иван' },
    { id: 3, gameName: 'Семейный обмен подарками', organizer: 'Мария' },
  ];

  return (
    <div className="invitations-page">
      {/* Шапка */}
      <header className="header">
        <h1>Мои приглашения</h1>
        <button onClick={() => window.location.href = '/'} className="home-btn">
          Главная
        </button>
      </header>

      <main className="content">
        <div className="invitations-list">
          {invitations.map((invitation) => (
            <div key={invitation.id} className="invitation-card">
              <div className="invitation-info">
                <h3>{invitation.gameName}</h3>
                <p>Организатор: {invitation.organizer}</p>
              </div>
              <div className="invitation-actions">
                <button className="accept-button">Принять</button>
                <button className="decline-button">Отказаться</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2023 Тайный Санта. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default InvitationsPage;