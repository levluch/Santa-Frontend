import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';
import '../styles/InvitationsPage.css';

const InvitationsPage = () => {
  const navigate = useNavigate();

  const initialInvitations = [
    { id: 1, gameName: 'Рождественская вечеринка', organizer: 'Анна', status: 'pending', drawDate: '2025-12-22', deadline: '2025-12-28' },
    { id: 2, gameName: 'Корпоративный Тайный Санта', organizer: 'Иван', status: 'pending', drawDate: '2025-12-23', deadline: '2025-12-29' },
    { id: 3, gameName: 'Семейный обмен подарками', organizer: 'Мария', status: 'pending', drawDate: '2025-12-24', deadline: '2025-12-30' },
  ];

  const [invitations, setInvitations] = useState([]);

  useEffect(() => {
    const savedInvites = JSON.parse(localStorage.getItem('acceptedInvites')) || [];
    const updatedInvites = initialInvitations.map(inv =>
      savedInvites.find(saved => saved.id === inv.id)
        ? { ...inv, status: 'accepted' }
        : inv
    );
    setInvitations(updatedInvites);
  }, []);

  const handleAccept = (id) => {
    const updated = invitations.map(inv =>
      inv.id === id ? { ...inv, status: 'accepted' } : inv
    );
    const accepted = updated.filter(inv => inv.status === 'accepted');
    localStorage.setItem('acceptedInvites', JSON.stringify(accepted));
    setInvitations(updated);
  };

  const handleDecline = (id) => {
    setInvitations(prev => prev.filter(inv => inv.id !== id));
  };

  const pendingInvitations = invitations.filter(inv => inv.status === 'pending');
  const acceptedInvitations = invitations.filter(inv => inv.status === 'accepted');

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
        <button onClick={() => navigate('/')} className="header-btn">
          🏠 Главная
        </button>
      </header>

      <h2 className="section-title">Мои приглашения</h2>
      <main className="main-content invitations-main">
        {/* Новые приглашения */}
        {pendingInvitations.length > 0 && (
          <div className="invitations-section">
            <h3 className="subsection-title">Новые приглашения</h3>
            <div className="invitations-list">
              {pendingInvitations.map((invitation) => (
                <div key={invitation.id} className="invitation-card pending-card">
                  <div className="invitation-info">
                    <h3 className="invitation-game">{invitation.gameName}</h3>
                    <p className="invitation-organizer">Организатор: {invitation.organizer}</p>
                    <p className="invitation-date">Жеребьёвка: {invitation.drawDate}</p>
                    <p className="invitation-deadline">Дедлайн: {invitation.deadline}</p>
                  </div>
                  <div className="invitation-actions">
                    <button 
                      className="header-btn accept-btn"
                      onClick={() => handleAccept(invitation.id)}
                    >
                      Принять
                    </button>
                    <button 
                      className="header-btn cancel-btn"
                      onClick={() => handleDecline(invitation.id)}
                    >
                      Отказаться
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Принятые приглашения */}
        {acceptedInvitations.length > 0 && (
          <div className="invitations-section">
            <h3 className="subsection-title">Принятые приглашения</h3>
            <div className="invitations-list">
              {acceptedInvitations.map((invitation) => (
                <div 
                  key={invitation.id} 
                  className="invitation-card accepted-card"
                  onClick={() => navigate('/event/2')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="invitation-info">
                    <h3 className="invitation-game">{invitation.gameName}</h3>
                    <p className="invitation-organizer">Организатор: {invitation.organizer}</p>
                    <p className="invitation-date">Жеребьёвка: {invitation.drawDate}</p>
                    <p className="invitation-deadline">Дедлайн: {invitation.deadline}</p>
                  </div>
                  <p className="invitation-status">✅ Принято</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {invitations.length === 0 && (
          <div className="no-invitations">
            <p>У вас пока нет приглашений</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="santa-run">
          <img src="/images/santa-reindeer.gif" alt="Santa on sleigh" />
        </div>
        <p>© 2025 Тайный Санта. Все права защищены. Сделано с ❄ и 🎁</p>
      </footer>
    </div>
  );
};

export default InvitationsPage;