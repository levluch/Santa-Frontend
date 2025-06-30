import React, { useState } from 'react';  // Добавлен импорт useState
import '../styles/EventsPage.css'

function EventsPage() {
  const [participants, setParticipants] = useState([
    { id: 1, name: 'Анна', tg: 'doll_nik' },
    { id: 2, name: 'Борис', tg: 'winner_one' },
  ]);
  const [newName, setNewName] = useState('');
  const [newTg, setNewTg] = useState('');  // Исправлено название переменной на setNewTg
  const [results, setResults] = useState(null);

  // Функция добавления участника
  const addParticipant = () => {
    if (newName.trim() && newTg.trim()) {
      const newParticipant = {
        id: participants.length + 1,
        name: newName.trim(),
        tg: newTg.trim()
      };
      setParticipants([...participants, newParticipant]);
      setNewName('');
      setNewTg('');
    } else {
      alert('Пожалуйста, заполните оба поля: имя и Telegram.');
    }
  };

  // Функция жеребьёвки
  const startDraw = () => {
    if (participants.length < 3) {
      alert('Для жеребьёвки нужно минимум 3 участника');
      return;
    }

    // Перемешиваем участников
    const shuffled = [...participants].sort(() => Math.random() - 0.5);

    // Формируем пары, чтобы никто не получил самого себя
    const pairs = participants.map((p, i) => {
      // Если совпадает имя, берем следующего по циклу
      let toIndex = i;
      if (shuffled[i].id === p.id) {
        toIndex = (i + 1) % shuffled.length;
      }
      return {
        from: p.name,
        to: shuffled[toIndex].name
      };
    });

    setResults(pairs);
  };

  return (
    <div className="page">
      <header className="header">
        <h1>Тайный Санта</h1>
        <button onClick={() => window.location.href = '/'} className="home-btn">
          Главная
        </button>
      </header>

      <main className="content">
        <h2>Мои мероприятия</h2>

        <div className="section">
          <h3>Участники:</h3>
          <ul>
            {participants.map(p => (
              <li key={p.id}>{p.name} ({p.tg})</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>Добавить участника:</h3>
          <div className="add-form">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Имя"
            />
            <input
              type="text"  // Исправлено с type="tg" на type="text"
              value={newTg}
              onChange={(e) => setNewTg(e.target.value)}  // Исправлено с setNewtg на setNewTg
              placeholder="Telegram"
            />
            <button onClick={addParticipant}>Добавить</button>
          </div>
        </div>

        <div className="section">
          <button onClick={startDraw} disabled={participants.length < 3}>
            Начать жеребьевку
          </button>
        </div>

        {results && (
          <div className="section">
            <h3>Результаты:</h3>
            <ul>
              {results.map((pair, i) => (
                <li key={i}>{pair.from} → {pair.to}</li>
              ))}
            </ul>
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
