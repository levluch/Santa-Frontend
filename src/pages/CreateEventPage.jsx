import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';
import '../styles/CreateEventPage.css';

const CreateEventPage = () => {
  const [form, setForm] = useState({
    name: '', drawDate: '', deadline: '', budget: ''
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: тут отправка на бэкенд (гпт)
    navigate('/my-events');
  };

  return (
    <div className="secret-santa-container">
      <header className="main-header">
        <h1 className="header-title">🎅 Тайный Санта 🎁</h1>
        <button className="header-btn" onClick={() => navigate('/')}>🏠 Главная</button>
      </header>

      <main className="create-event-content">
        <h2>Создать мероприятие</h2>
        <form className="event-form" onSubmit={handleSubmit}>
          <label>Название мероприятия<input name="name" value={form.name} onChange={handleChange}/></label>
          <label>Дата жеребьёвки<input type="date" name="drawDate" value={form.drawDate} onChange={handleChange}/></label>
          <label>Дедлайн отправки подарков<input type="date" name="deadline" value={form.deadline} onChange={handleChange}/></label>
          <label>Бюджет<input name="budget" value={form.budget} onChange={handleChange}/></label>
          <button type="submit" className="submit-btn">Создать</button>
        </form>
      </main>

      <footer className="footer">
        <div className="santa-run">
          <img src="/images/santa-reindeer.gif" alt="Santa on sleigh"/>
        </div>
        <p>© 2025 Тайный Санта. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default CreateEventPage;
