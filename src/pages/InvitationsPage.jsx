import React, { useState } from 'react';
import '../styles/index.css';
import '../styles/InvitationsPage.css';

const InvitationsPage = () => {
  const initialInvitations = [
    { id: 1, gameName: 'Рождественская вечеринка', organizer: 'Анна', status: 'pending' },
    { id: 2, gameName: 'Корпоративный Тайный Санта', organizer: 'Иван', status: 'pending' },
    { id: 3, gameName: 'Семейный обмен подарками', organizer: 'Мария', status: 'pending' },
  ];

  const [invitations, setInvitations] = useState(initialInvitations);

  const handleAccept = (id) => {
    setInvitations(invitations.map(inv => 
      inv.id === id ? { ...inv, status: 'accepted' } : inv
    ));
  };

  const handleDecline = (id) => {
    setInvitations(invitations.filter(inv => inv.id !== id));
  };

  const pendingInvitations = invitations.filter(inv => inv.status === 'pending');
  const acceptedInvitations = invitations.filter(inv => inv.status === 'accepted');

  return (
    <div className="secret-santa-container">
      <header className="main-header">
        <h1 className="header-title">🎅 Тайный Санта 🎁</h1>
        <button onClick={() => window.location.href = '/'} className="header-btn">
          🏠 Главная
        </button>
      </header>
      
      
      <h2 className="section-title">Мои приглашения</h2>
      <main className="main-content invitations-main">  
        
        {/* Новые приглашения */}
        {pendingInvitations.length > 0 && (
          <div className="invitations-section pending-section">
            <h3 className="subsection-title">Новые приглашения</h3>
            <div className="invitations-list">
              {pendingInvitations.map((invitation) => (
                <div key={invitation.id} className="invitation-card pending-card">
                  <div className="invitation-info">
                    <h3 className="invitation-game">{invitation.gameName}</h3>
                    <p className="invitation-organizer">Организатор: {invitation.organizer}</p>
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
          <div className="invitations-section accepted-section">
            <h3 className="subsection-title">Принятые приглашения</h3>
            <div className="invitations-list">
              {acceptedInvitations.map((invitation) => (
                <div key={invitation.id} className="invitation-card accepted-card">
                  <div className="invitation-info">
                    <h3 className="invitation-game">{invitation.gameName}</h3>
                    <p className="invitation-organizer">Организатор: {invitation.organizer}</p>
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
        <p>© 2025 Тайный Санта. Все права защищены. Сделано с ❄ и 🎁</p>
      </footer>
    </div>
  );
};

export default InvitationsPage;