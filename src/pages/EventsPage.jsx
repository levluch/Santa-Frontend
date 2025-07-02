import React, { useState } from 'react';
import '../styles/index.css';
import '../styles/EventsPage.css';

function EventsPage() {
  const [participants, setParticipants] = useState([
    { id: 1, firstName: 'Анна', lastName: 'Иванова', tg: 'doll_nik', isMarried: false, partnerWorksSameOffice: false },
    { id: 2, firstName: 'Борис', lastName: 'Петров', tg: 'winner_one', isMarried: true, partnerWorksSameOffice: true },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [results, setResults] = useState(null);
  const [newParticipant, setNewParticipant] = useState({
    firstName: '',
    lastName: '',
    tg: '',
    isMarried: false,
    partnerWorksSameOffice: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewParticipant({
      ...newParticipant,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const addParticipant = () => {
    if (!newParticipant.firstName.trim() || !newParticipant.lastName.trim() || !newParticipant.tg.trim()) {
      alert('Пожалуйста, заполните обязательные поля: имя, фамилия и Telegram.');
      return;
    }

    const participant = {
      id: participants.length + 1,
      ...newParticipant
    };

    setParticipants([...participants, participant]);
    setNewParticipant({
      firstName: '',
      lastName: '',
      tg: '',
      isMarried: false,
      partnerWorksSameOffice: false
    });
    setShowModal(false);
  };

  const startDraw = () => {
    if (participants.length < 3) {
      alert('Для жеребьёвки нужно минимум 3 участника');
      return;
    }

    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    const pairs = participants.map((p, i) => {
      let toIndex = i;
      if (shuffled[i].id === p.id) {
        toIndex = (i + 1) % shuffled.length;
      }
      return {
        from: `${p.firstName} ${p.lastName}`,
        to: `${shuffled[toIndex].firstName} ${shuffled[toIndex].lastName}`
      };
    });

    setResults(pairs);
  };

  return (
    <div className="secret-santa-container">
      <header className="main-header">
        <h1 className="header-title">🎅 Тайный Санта 🎁</h1>
        <button onClick={() => window.location.href = '/'} className="header-btn">
          🏠 Главная
        </button>
      </header>

      <main className="main-content">
        <div className="participants-section">
          <h2>Участники:</h2>
          <ul className="participants-list">
            {participants.map(p => (
            <li key={p.id} className="participant-item">
              {p.firstName} {p.lastName} (@{p.tg}) 
              {p.isMarried && (<> 👰
              {p.partnerWorksSameOffice && ' есть партнер, который работает в том же офисе 🏬'}
            </> )}
            </li>
          ))}
        </ul>

    <div className="action-buttons" style={{ marginTop: '20px' }}>
      <button onClick={() => setShowModal(true)} className="header-btn" style={{ marginRight: '10px' }}>
        Добавить участника
      </button>
      <br></br>
      <button onClick={startDraw} disabled={participants.length < 3} className="header-btn">
        Начать жеребьевку
      </button>
    </div>
  </div>

  {results && (
    <div className="results-section">
      <h2>Результаты:</h2>
      <ul className="results-list">
        {results.map((pair, i) => (
          <li key={i} className="result-item">{pair.from} → {pair.to}</li>
        ))}
      </ul>
    </div>
  )}

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3 className="modal-title">Добавить участника</h3>
              <div className="form-group">
                <label>Имя:</label>
                <input
                  type="text"
                  name="firstName"
                  value={newParticipant.firstName}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Фамилия:</label>
                <input
                  type="text"
                  name="lastName"
                  value={newParticipant.lastName}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Telegram:</label>
                <input
                  type="text"
                  name="tg"
                  value={newParticipant.tg}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group checkbox-group">
                <input
                  type="checkbox"
                  name="isMarried"
                  checked={newParticipant.isMarried}
                  onChange={handleInputChange}
                  id="isMarried"
                  className="checkbox-input"
                />
                <label htmlFor="isMarried" className="checkbox-label">Замужем/женат</label>
              </div>
              {newParticipant.isMarried && (
                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    name="partnerWorksSameOffice"
                    checked={newParticipant.partnerWorksSameOffice}
                    onChange={handleInputChange}
                    id="partnerWorksSameOffice"
                    className="checkbox-input"
                  />
                  <label htmlFor="partnerWorksSameOffice" className="checkbox-label">Партнер работает с вами офисе</label>
                </div>
              )}
              <div className="modal-buttons">
                <button onClick={addParticipant} className="header-btn">
                  Добавить
                </button>
                <button onClick={() => setShowModal(false)} className="header-btn cancel-btn">
                  Отмена
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2025 Тайный Санта. Все права защищены. Сделано с ❄ и 🎁</p>
      </footer>
    </div>
  );
}

export default EventsPage;