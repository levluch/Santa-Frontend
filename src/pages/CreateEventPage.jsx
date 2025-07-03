import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';
import '../styles/CreateEventPage.css';

const CreateEventPage = () => {
  const [form, setForm] = useState({
    name: '',
    drawDate: '',
    deadline: '',
    budget: ''
  });
  const navigate = useNavigate();

  // Инициализация массива событий при монтировании
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    localStorage.setItem('events', JSON.stringify(savedEvents));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    const newEvent = {
      id: Date.now(),
      name: form.name,
      drawDate: form.drawDate,
      deadline: form.deadline,
      budget: form.budget,
      route: '/events'
    };
    savedEvents.push(newEvent);
    localStorage.setItem('events', JSON.stringify(savedEvents));
    navigate('/my-events');
  };

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
        <button className="header-btn" onClick={() => navigate('/')}>🏠 Главная</button>
      </header>

      <main className="create-event-content">
        <h2>Создать мероприятие</h2>
        <form className="event-form" onSubmit={handleSubmit}>
          <label>
            Название мероприятия
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Дата жеребьёвки
            <input type="date" name="drawDate" value={form.drawDate} onChange={handleChange} required />
          </label>
          <label>
            Дедлайн отправки подарков
            <input type="date" name="deadline" value={form.deadline} onChange={handleChange} required />
          </label>
          <label>
            Бюджет
            <input name="budget" value={form.budget} onChange={handleChange} />
          </label>
          <button type="submit" className="submit-btn">Создать</button>
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

export default CreateEventPage;
