import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, notification, ConfigProvider } from 'antd';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import '../styles/index.css';
import '../styles/ProfilePage.css';

const initialData = {
  surname: '',
  name: '',
  patronymic: '',
  birthDate: '',
  isMarried: false,
  interests: '',
  telegram: '',
  wishlist: '',
};

const ProfilePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData);
  const [isSaved, setIsSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Установим хук уведомлений
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const saved = localStorage.getItem('profileData');
    if (saved) {
      setFormData(JSON.parse(saved));
      setIsSaved(true);
    }
  }, []);

  const notifySuccess = (title, description) => {
    api.success({
      message: title,
      description,
      placement: 'topRight',
      icon: <CheckOutlined style={{ color: '#A8E6CF' }} />,
      duration: 2,
    });
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem('profileData', JSON.stringify(formData));

    if (!isSaved) {
      notifySuccess('Регистрация завершена', 'Вы успешно зарегистрированы!');
    } else {
      notifySuccess('Данные обновлены', 'Ваши изменения сохранены.');
    }

    setIsSaved(true);
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#A8E6CF',
          borderRadius: 8,
          colorText: '#2A2A2A',
        },
      }}
    >
      {contextHolder}

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
          <button className="header-btn" onClick={() => navigate('/')}>
            🏠 Главная
          </button>
        </header>

        <main className="profile-wrapper">
          <div className="profile-header">
            <h2>Анкета участника</h2>
            {isSaved && !isEditing && (
              <Button
                type="default"
                className="edit-btn"
                icon={<EditOutlined />}
                onClick={handleEdit}
              >
                Редактировать
              </Button>
            )}
          </div>

          <form className={`profile-form ${isSaved && !isEditing ? 'disabled' : ''}`}>
            <label>
              Фамилия
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="Введите вашу фамилию"
                disabled={isSaved && !isEditing}
              />
            </label>
            <label>
              Имя
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Введите ваше имя"
                disabled={isSaved && !isEditing}
              />
            </label>
            <label>
              Отчество
              <input
                type="text"
                name="patronymic"
                value={formData.patronymic}
                onChange={handleChange}
                placeholder="Введите ваше отчество"
                disabled={isSaved && !isEditing}
              />
            </label>
            <label>
              Дата рождения
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                disabled={isSaved && !isEditing}
              />
            </label>
            <label className="checkbox-label">
              <span>Замужем/Женат</span>
              <input
                type="checkbox"
                name="isMarried"
                checked={formData.isMarried}
                onChange={handleChange}
                disabled={isSaved && !isEditing}
              />
            </label>
            <label>
              Ник в Telegram
              <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                placeholder="@nickname"
                disabled={isSaved && !isEditing}
              />
            </label>
            <label>
              Интересы
              <textarea
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                placeholder="Чем увлекаетесь?"
                disabled={isSaved && !isEditing}
              />
            </label>
            <label>
              Вишлист (пожелания к подарку)
              <textarea
                name="wishlist"
                value={formData.wishlist}
                onChange={handleChange}
                placeholder="Например: свечи, шоколад..."
                disabled={isSaved && !isEditing}
              />
            </label>

            {!isSaved || isEditing ? (
              <Button
                type="primary"
                className="save-btn"
                onClick={handleSave}
              >
                📩 Зарегистрироваться
              </Button>
            ) : null}
          </form>
        </main>

        <footer className="footer">
          <div className="santa-run">
            <img src="/images/santa-reindeer.gif" alt="Santa on sleigh" />
          </div>
          <p>© 2025 Тайный Санта. Все права защищены.</p>
        </footer>
      </div>
    </ConfigProvider>
  );
};

export default ProfilePage;
