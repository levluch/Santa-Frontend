import React, { useState } from 'react';
import './EventsPage.css';

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
    <div className="events-page">
      <header className="header">
        <h1>Мои мероприятия</h1>
        <button onClick={() => window.location.href = '/'} className="home-btn">
          Главная
        </button>
      </header>

      <main className="content">
        <div className="participants-list">
          <h3>Участники:</h3>
          <ul>
            {participants.map(p => (
              <li key={p.id}>
                {p.firstName} {p.lastName} (@{p.tg}) {p.isMarried ? '👰' : ''}
              </li>
            ))}
          </ul>
        </div>

        <div className="buttons-container">
          <button onClick={() => setShowModal(true)} className="add-btn">
            Добавить участника
          </button>
          <button onClick={startDraw} disabled={participants.length < 3} className="draw-btn">
            Начать жеребьевку
          </button>
        </div>

        {results && (
          <div className="results">
            <h3>Результаты:</h3>
            <ul>
              {results.map((pair, i) => (
                <li key={i}>{pair.from} → {pair.to}</li>
              ))}
            </ul>
          </div>
        )}

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Добавить участника</h3>
              <div className="form-group">
                <label>Имя:</label>
                <input
                  type="text"
                  name="firstName"
                  value={newParticipant.firstName}
                  onChange={handleInputChange}
                  required
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
                />
              </div>
              <div className="form-group checkbox-group">
                <input
                  type="checkbox"
                  name="isMarried"
                  checked={newParticipant.isMarried}
                  onChange={handleInputChange}
                  id="isMarried"
                />
                <label htmlFor="isMarried">Замужем/женат</label>
              </div>
              {newParticipant.isMarried && (
                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    name="partnerWorksSameOffice"
                    checked={newParticipant.partnerWorksSameOffice}
                    onChange={handleInputChange}
                    id="partnerWorksSameOffice"
                  />
                  <label htmlFor="partnerWorksSameOffice">Партнер работает с вами офисе</label>
                </div>
              )}
              <div className="modal-buttons">
                <button onClick={addParticipant} className="confirm-btn">
                  Добавить
                </button>
                <button onClick={() => setShowModal(false)} className="cancel-btn">
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